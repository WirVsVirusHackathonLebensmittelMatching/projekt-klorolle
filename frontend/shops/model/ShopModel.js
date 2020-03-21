sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";

	return JSONModel.extend("com.wir.vs.virus.timeslots.ShopOwner.model.ShopModel", {
		registerShop: function (mProperties) {
			var oData = this.getData();
			oData.push({
				name: mProperties.name
			});
			this.setData(oData);
		}
	});
});