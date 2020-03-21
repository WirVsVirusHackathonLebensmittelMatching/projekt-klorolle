sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/wir/vs/virus/timeslots/ShopOwner/model/models"
], function (
	Controller,
	models
) {
	"use strict";
	
	return Controller.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.Main", {
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("Main").attachPatternMatched(this._onObjectMatched, this);
			this.oGoodsModel = models.createGoodsModel();
			this.getView().setModel(this.oGoodsModel, "goods");
		},
		
		_onObjectMatched: function (oEvent) {
			var sId = oEvent.getParameter("arguments").id;
			this.sId = sId;
			this.byId("page").setTitle(this.sId);
			this.oGoodsModel.load(this.sId);
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