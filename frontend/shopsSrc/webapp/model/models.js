sap.ui.define([
	"com/wir/vs/virus/timeslots/ShopOwner/model/GoodsModel",
	"com/wir/vs/virus/timeslots/ShopOwner/model/SlotsModel",
	"com/wir/vs/virus/timeslots/ShopOwner/model/ShopModel",
	"com/wir/vs/virus/timeslots/ShopOwner/model/ShopsModel",
	"com/wir/vs/virus/timeslots/ShopOwner/model/OrderModel"
], function (
	GoodsModel,
	SlotsModel,
	ShopModel,
	ShopsModel,
	OrderModel
) {
	"use strict";

	return {
		createShopModel: function () {
			var oModel = new ShopModel();
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createShopsModel: function () {
			var oModel = new ShopsModel();
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
		},

		createOrderModel: function () {
			var oModel = new OrderModel();
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}
	};
});