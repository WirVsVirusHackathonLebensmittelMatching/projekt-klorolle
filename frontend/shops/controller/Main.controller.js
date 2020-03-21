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
		
		_onObjectMatched: function (oEvent) {
			var sName = oEvent.getParameter("arguments").name;
			this.sName = sName;
			this.byId("page").setTitle(sName);
		},
		
		toSlotsConfig: function () {
			this.oRouter.navTo("SlotsConfig", {name: this.sName});
		},

		toSlotDetails: function () {
			this.oRouter.navTo("SlotDetails", {name: this.sName});
		},

		toGoods: function () {
			this.oRouter.navTo("Goods", {name: this.sName});
		}
	});
});