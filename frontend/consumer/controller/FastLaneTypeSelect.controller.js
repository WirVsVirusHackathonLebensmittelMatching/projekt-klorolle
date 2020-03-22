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
			oOrder.type = bPickUp ? "pickup" : "shopping";
			oOrder.comment = this.getView().byId("comment").getValue();

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