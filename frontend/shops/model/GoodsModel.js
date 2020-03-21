sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"com/wir/vs/virus/timeslots/ShopOwner/data/Goods",
	"com/wir/vs/virus/timeslots/ShopOwner/utils/Connection"
], function (
	JSONModel,
	Goods,
	Connection
) {
	"use strict";

	return JSONModel.extend("com.wir.vs.virus.timeslots.ShopOwner.model.GoodsModel", {
		shopId: undefined,
		load: function (sShopId) {
			if (sShopId === this.shopId) {
				return Promise.resolve();
			}
			this.shopId = sShopId;
			this.loadData("/api/v1/shops/" + this.shopId + "/goods/").then(function () {
				var oData = this.getData();
				var oShopGoods = Object.assign({}, Goods);
				oData.forEach(function (oGood) {
					oShopGoods.find(function (oShopGood) {
						return oShopGood.name === oGood.name;
					}).status = oGood.status;
				});
				this.setData(oShopGoods);
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