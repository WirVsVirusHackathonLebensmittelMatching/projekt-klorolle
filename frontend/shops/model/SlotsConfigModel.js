sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";

	var dummyData = {
		from : "8:00",
		to : "16:00",
		slotDuration : 15,
		parallelSlots : 5
	};


	return JSONModel.extend("com.wir.vs.virus.timeslots.ShopOwner.model.SlotsConfigModel", {
		load: function (sShopName) {
			return new Promise(function (resolve, reject) {
				this.setData(dummyData);
				resolve();
			}.bind(this));
		},

		editSlotsConfig: function (mConfig) {
			// TODO send the editing
			this.setData(mConfig);
			return Promise.resolve();
		}
	});
});