sap.ui.define([
	"com/wir/vs/virus/timeslots/ShopOwner/model/GoodsModel",
	"com/wir/vs/virus/timeslots/ShopOwner/model/SlotsModel",
	"com/wir/vs/virus/timeslots/ShopOwner/model/ShopModel"
], function (
	GoodsModel,
	SlotsModel,
	ShopModel
) {
	"use strict";

	var oShopsDummy = [{
		name: "EDEKA"
	},{
		name: "ALDI"
	}];

	return {
		createShopsModel: function () {
			var oModel = new ShopModel(oShopsDummy);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createGoodsModel: function () {
			var oModel = new GoodsModel();
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createSlotsModel: function () {
			var oModel = new SlotsModel();
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};
});