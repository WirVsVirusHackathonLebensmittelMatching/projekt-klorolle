sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";

	var mStatus = {

	};

	var dummyData = [{
		name : "Nudeln",
		category : "food",
		status : "short"
	},{
		name : "Milch",
		category : "food",
		status : "available"
	},{
		name : "Gemüse",
		category : "food",
		status : "unknown"
	},{
		name : "Obst",
		category : "food",
		status : "short"
	},{
		name : "Nüsse",
		category : "food",
		status : "empty"
	}];

	return JSONModel.extend("com.wir.vs.virus.timeslots.ShopOwner.model.GoodsModel", {
		load: function (sShopId) {
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