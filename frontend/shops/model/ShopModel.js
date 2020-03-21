sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";

	return JSONModel.extend("com.wir.vs.virus.timeslots.ShopOwner.model.ShopModel", {
		load: function () {
			this.setData(this.loadData("/api/v1/shops/"));
		},

		login: function (sShopName) {
			// TODO: resolve if the shop exists // rejects if not
			return Promise.resolve();
		},

		registerShop: function (mProperties) {
			return new Promise(function (resolve, reject) {
				jQuery.ajax({
					method: "POST",
					url: "/api/v1/shops",
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					data: JSON.stringify(mProperties),
				}).done(() => {
					resolve();
				});

			}.bind(this));
		}
	});
});