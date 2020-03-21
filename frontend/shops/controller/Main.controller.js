sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/wir/vs/virus/timeslots/ShopOwner/model/models"
], function (
	Controller,
	models
) {
	"use strict";

	function findName(oController, sId) {
		var oData = oController.getView().getModel("shops").getData();
		var oShop = oData.find(function (oShop) {
			return oShop.id === sId;
		});
		return oShop.name;
	}
	
	return Controller.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.Main", {
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("Main").attachPatternMatched(this._onObjectMatched, this);
		},
		
		_onObjectMatched: function (oEvent) {
			var sId = oEvent.getParameter("arguments").id;
			this.sId = sId;

			this.byId("page").setTitle(findName(this, sId));

			this.getView().getModel("goods").load(this.sId);
		},
		
		toSlotsConfig: function () {
			this.oRouter.navTo("SlotConfig", {id: this.sId});
		},

		toCalendar: function () {
			this.oRouter.navTo("Calendar", {id: this.sId});
		},

		toGoods: function () {
			this.oRouter.navTo("Goods", {id: this.sId});
		}
	});
});