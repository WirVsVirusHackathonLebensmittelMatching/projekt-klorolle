sap.ui.define([
	"./BaseController"
], function (
	BaseController
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
			oOrder.customer = "3fa85f64-5717-4562-b3fc-2c963f66afa6";

			this.getView().getModel().confirmOrder(oOrder).then(function (oPlacedOrder) {
				this.getView().getModel().setProperty("/order", oPlacedOrder);
				this.getRouter().navTo("fastLaneConfirm", {
					shopId: oPlacedOrder.shop,
					orderId: oPlacedOrder.id
				});
			}.bind(this));
		}
	});
});