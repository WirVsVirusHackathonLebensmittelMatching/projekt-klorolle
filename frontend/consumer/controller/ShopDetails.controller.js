sap.ui.define([
	"./BaseController",
	"sap/m/MessageBox"
], function (
	BaseController,
	MessageBox
) {
	"use strict";

	function findFastLane(bRetry) {
		var oBaseModel = this.getModel();
		let sShopId = oBaseModel.getProperty("/shop").id;
		oBaseModel.findNextFastLane(sShopId, bRetry).then(function (oFastLane) {
			oBaseModel.setProperty("/order", oFastLane);
			this.getRouter().navTo("fastLaneTypeSelect", {shopId: sShopId});
		}.bind(this))
			.catch(function (sError) {
				if (!bRetry) {
					findFastLane.call(this, true);
				} else {
					MessageBox.error(sError);
				}
			}.bind(this))
	}
	
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
			findFastLane.call(this, false);
		}
	});
});