sap.ui.define([
	"./BaseController",
	"../model/UUID"
], function (
	BaseController, UUID
) {
	"use strict";
	
	return BaseController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.FastLaneTypeSelect", {
		onInit: function () {
			this.getRouter().getRoute("fastLaneTypeSelect").attachPatternMatched(this._onPatternMatched, this);
		},

		_onPatternMatched: function(oEvent)
		{
			let oArguments = oEvent.getParameter("arguments");
		},

		onProceedFastLane: function (bPickUp) {
			let oOrder = this.getView().getModel().getProperty("/order");
			oOrder.type = bPickUp ? "clickAndCollect" : "shopYourself";
			oOrder.comment = this.getView().byId("comment").getValue();
			oOrder.customer = UUID.createV4();

			this.getView().getModel().confirmOrder(oOrder).then(function (oPlacedOrder) {
				//Postprocess order
				oPlacedOrder.shopName = this.getModel().getProperty("/shop/name");
				this.getView().getModel("account").addOrder(oPlacedOrder);
				this.getRouter().navTo("fastLaneConfirm", {
					shopId: this.getModel().getProperty("/shop/id"),
					orderId: oPlacedOrder.id
				});
			}.bind(this));
		}
	});
});