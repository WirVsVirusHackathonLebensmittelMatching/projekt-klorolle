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

	return {
		createShopsModel: function () {
			var oModel = new ShopModel();
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