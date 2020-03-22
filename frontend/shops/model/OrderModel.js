sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";

	return JSONModel.extend("com.wir.vs.virus.timeslots.ShopOwner.model.SlotsModel", {
		shopId: undefined,
		load: function (sShopId, sOrderId) {
			this.setData({
				"id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
				"customer": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
				"shop": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
				"dateStart": "Sun Mar 22 2020 15:44:39 GMT+0100 (Central European Standard Time)",
				"duration": 120,
				"type": "shopYourself",
				"status": "",
				"comment": "string"
			});
			return;
			this.loadData("")
		},

		reject: function (sShopId, sOrderId) {

		}
	});
});