sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (
	Controller,
	History
) {
	"use strict";

	return Controller.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.DetailsPage", {
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute(this.sRoute).attachPatternMatched(this._onObjectMatched, this);
		},
		
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.oRouter.navTo("Main", {name: this.sName}, true);
			}
		},
		
		_onObjectMatched: function (oEvent) {
			this.sName = oEvent.getParameter("arguments").name;
		}
	});
});