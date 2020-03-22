sap.ui.define([
	"./BaseController"
], function (
	BaseController
) {
	"use strict";
	
	return BaseController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.ShopSearch", {
		onInit: function () {
			this.getRouter().getRoute("shopSearch").attachPatternMatched(this._onPatternMatched, this);
		},
		
		onSearchShop: function(oEvent)
		{
			if (oEvent.getParameter("refreshButtonPressed")) {
				this.getModel().refreshShops();
			} else {
				this.getModel().searchShops(oEvent.getParameter("query"));
			}
		},

		_onPatternMatched: function(oEvent)
		{
			let oArguments = oEvent.getParameter("arguments");
			if (oArguments.zipCode) {
				this.byId("shopSearch").setValue(oArguments.zipCode);
				this.getModel().searchShops(oArguments.zipCode, oArguments.distance);
			} else {
				this.getModel().refreshShops();
			}
		}
	});
});