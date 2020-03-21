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
			this.setData(dummyData);
		},

		setGood: function (mProperties) {
			var oData = this.getData();
			oData[mProperties.name] = mProperties.status;
			this.setData(oData);
		}
	});
});