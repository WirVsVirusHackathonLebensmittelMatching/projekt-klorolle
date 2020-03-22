sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"com/wir/vs/virus/timeslots/ShopOwner/utils/Connection"
], function (
	JSONModel,
	Connection
) {
	"use strict";

	return JSONModel.extend("com.wir.vs.virus.timeslots.ShopOwner.model.ShopsModel", {
		load: function () {
			this.setData(this.loadData("/api/v1/shops/"));
		},

		findByName: function (sName) {
			var oData = this.getData();
			return oData.find(function (oShop){
				return oShop.name === sName;
			});
		},

		login: function (sShopId) {
			// TODO: resolve if the shop exists // rejects if not
			return Promise.resolve();
		},

		registerShop: function (mProperties) {
			return Connection.post("/api/v1/shops", JSON.stringify(mProperties));
		}
	});
});