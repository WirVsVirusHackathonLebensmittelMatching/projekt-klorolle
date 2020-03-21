sap.ui.define([
	"./BaseController"
], function (
	BaseController
) {
	"use strict";
	
	return BaseController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.Login", {
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		
		onSearchShop: function(oEvent)
		{
			if (oEvent.getParameter("refreshButtonPressed")) {
				this.getModel().refreshShops();
			} else {
				this.getModel().searchShops(oEvent.getParameter("query"));
			}
		}
	});
});