sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"com/wir/vs/virus/timeslots/ShopOwner/model/ShopModel"
], function (
	JSONModel,
	ShopModel
) {
	"use strict";

	return {
		createSlotsModel: function (sName) {
			var oModel = new JSONModel({
				slots: []
			});
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		createShopsModel: function () {
			var oShops = [{
				name: "EDEKA"	
			},{
				name: "ALDI"	
			}];
			var oModel = new ShopModel(oShops);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};
});