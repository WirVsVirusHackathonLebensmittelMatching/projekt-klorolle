sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"com/wir/vs/virus/timeslots/ShopOwner/utils/Connection"
], function (
	JSONModel,
	Connection
) {
	"use strict";

	return JSONModel.extend("com.wir.vs.virus.timeslots.ShopOwner.model.ShopsModel", {
		shopId: undefined,
		load: function (sShopId) {
			if (sShopId === this.shopId) {
				return Promise.resolve();
			}
			this.shopId = sShopId;
			this.setData(this.loadData("/api/v1/shops/" + sShopId));
		},

		editSlotsConfig: function (mConfig) {
			var oShop = this.getData();
			oShop.timeslots = mConfig;

			return Connection.put("/api/v1/shops/" + this.shopId, mConfig).then(function () {
				this.setProperty("timeslots", mConfig);
			}.bind(this));
		}
	});
});