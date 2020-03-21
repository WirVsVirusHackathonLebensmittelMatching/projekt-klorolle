sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"com/wir/vs/virus/timeslots/ShopOwner/data/Goods"
], function (
	JSONModel,
	Goods
) {
	"use strict";

	return JSONModel.extend("com.wir.vs.virus.timeslots.ShopOwner.model.GoodsModel", {
		shopId: undefined,
		load: function (sShopId) {
			if (sShopId === this.shopId) {
				return Promise.resolve();
			}
			this.shopId = sShopId;
			// TODO: load data for a given shop
			return new Promise(function (resolve, reject) {
				this.setData(Goods);
			}.bind(this));
		},

		setGood: function (mProperties) {
			// TODO: set a specific good on the shop
			return new Promise(function (resolve, reject) {
				var oData = this.getData();
				oData[mProperties.name] = mProperties.status;
				this.setData(oData);
			}.bind(this));
		}
	});
});