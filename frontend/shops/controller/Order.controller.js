sap.ui.define([
	"com/wir/vs/virus/timeslots/ShopOwner/controller/DetailsPage.controller",
	"com/wir/vs/virus/timeslots/ShopOwner/model/models"
], function (
	DetailsPageController,
	models
) {
	"use strict";

	return DetailsPageController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.Order", {
		sRoute: "Order",

		onInit: function () {
			DetailsPageController.prototype.onInit.apply(this);
			this.getView().setModel(models.createOrderModel(), "order");
		},

		_onObjectMatched : function (oEvent) {
			DetailsPageController.prototype._onObjectMatched.apply(this, [oEvent]);
			this.id = oEvent.getParameter("arguments").id;
			this.orderId = oEvent.getParameter("arguments").orderId;
			this.getView().getModel("order").load(this.sId, this.orderId);
		},

		onConfirm: function () {
			this.onNavBack();
		}
	});
});