sap.ui.define([
	"./BaseController"
], function (
	BaseController
) {
	"use strict";
	
	return BaseController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.ShopDetails", {
		onInit: function () {
			this.getRouter().getRoute("shopDetails").attachPatternMatched(this._onPatternMatched, this);
		},

		_onPatternMatched: function(oEvent)
		{
			let oArguments = oEvent.getParameter("arguments");
			this.getModel().selectShop(oArguments.shopId);
		},

		onFindNextFastlane: function () {
			var oBaseModel = this.getModel();
			let sShopId = oBaseModel.getProperty("/shop").id;
			oBaseModel.findNextFastLane(sShopId).then(function (oFastLane) {
				oBaseModel.setProperty("/order", oFastLane);
				this.getRouter().navTo("fastLaneTypeSelect", {shopId: sShopId});
			}.bind(this))
		}
	});
});