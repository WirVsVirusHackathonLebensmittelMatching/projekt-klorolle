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
			this.setData(this.loadData("/api/v1/shop/" + sShopId));
		},

		editSlotsConfig: function (mConfig) {
			// TODO send the editing
			this.setProperty("timeslots", mConfig);
			return Promise.resolve();
		}
	});
});