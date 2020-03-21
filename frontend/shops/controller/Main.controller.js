sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (
	Controller,
	History
) {
	"use strict";
	
	return Controller.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.Main", {
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("Main").attachPatternMatched(this._onObjectMatched, this);
		},
		
		/*onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.oRouter.navTo("overview", {}, true);
			}
		},*/
		
		_onObjectMatched: function (oEvent) {
			var sName = oEvent.getParameter("arguments").name;
			this.sName = sName;
			this.byId("page").setTitle(sName);
		},
		
		toSlots: function () {
			this.oRouter.navTo("Slots", {name: this.sName});
		},
		
		toUpcoming: function () {
			this.oRouter.navTo("Upcoming", {name: this.sName});
		},
		
		toInbox: function () {
			this.oRouter.navTo("Inbox", {name: this.sName});
		}
	});
});