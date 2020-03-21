sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";

	var mStatus = {

	};

	var dummyData = [{
		name: "Nudeln",
		status: 0

	}];

	return JSONModel.extend("com.wir.vs.virus.timeslots.ShopOwner.model.GoodsModel", {
		load: function (sShopName) {
			// TODO: load data for a given shop
			return new Promise(function (resolve, reject) {
				this.setData(dummyData);
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