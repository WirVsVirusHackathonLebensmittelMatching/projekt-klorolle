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
				this.updateBindings();
				return Promise.resolve();
			}
			this.shopId = sShopId;
			this.loadData("/api/v1/shops/" + this.shopId + "/goods/").then(function () {
				var oData = this.getData();
				var oShopGoods = Goods.slice();
				oData.forEach(function (oGood) {
					var oMatchingGood = oShopGoods.find(function (oShopGood) {
						return oShopGood.name === oGood.name;
					});
					if (oMatchingGood) {
						oMatchingGood.status = oGood.status;
						oMatchingGood.id = oGood.id;
					}
				});
				this.setData(oShopGoods);
			}.bind(this));
		},

		changeGood: function (sPath, sStatus) {
			var oGood = this.getProperty(sPath);
			var sInitialStatus = oGood.status;
			oGood.status = sStatus;
			var sUrl = "/api/v1/shops/" + this.shopId + "/goods/";
			var oSendingPromise;
			if (sInitialStatus === "unknown") {
				oSendingPromise = Connection.post(sUrl, oGood);
			} else {
				sUrl += oGood.id;
				if (sStatus === "unknown") {
					oSendingPromise = Connection.remove(sUrl);
				} else {
					oSendingPromise = Connection.put(sUrl, oGood);
				}
			}

			return oSendingPromise.then(function (oWrittenGood) {
				if (oWrittenGood) {
					this.setProperty(sPath + "/id", oWrittenGood.id);
				}
				this.setProperty(sPath + "/status", sStatus);
			}.bind(this));
		}
	});
});