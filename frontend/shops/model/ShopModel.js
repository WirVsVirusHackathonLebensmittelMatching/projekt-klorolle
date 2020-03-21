sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";

	return JSONModel.extend("com.wir.vs.virus.timeslots.ShopOwner.model.ShopModel", {
		login: function (sShopName) {
			// TODO: resolve if the shop exists // rejects if not
			return Promise.resolve();
		},

		registerShop: function (mProperties) {
			return new Promise(function (resolve, reject) {
				// TODO: trigger the registration and resolve on successful registration
				var oData = this.getData();

				oData.push({
					name: mProperties.name
				});
				this.setData(oData);
				resolve();
			}.bind(this));
		}
	});
});