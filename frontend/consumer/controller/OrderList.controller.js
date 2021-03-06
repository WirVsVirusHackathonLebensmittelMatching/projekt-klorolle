sap.ui.define([
	"./BaseController",
	"sap/ui/core/routing/History"
], function (
	BaseController,
	History
) {
	"use strict";
	
	return BaseController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.OrderList", {
		onInit: function () {
			this.getRouter().getRoute("orderDetails").attachPatternMatched(this._onPatternMatched, this);
		},

		_onPatternMatched: function(oEvent)
		{
			let oArguments = oEvent.getParameter("arguments");
			this.getModel("account").selectOrder(oArguments.orderId);
		},

		formatDate: function (sDate) {
			return new Date(sDate).toLocaleString();
		}
	});
});