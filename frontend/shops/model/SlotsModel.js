sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";

	var dummyData = {
		startDate: new Date(),
		appointments: [{
			title: "Max Mustermann",
			from: new Date("2020", "2", "21", "10", "0"),
			to: new Date("2020", "2", "21", "10", "15"),
			type: "Type08",
			tentative: false
		},{
			title: "Max Musterfrau",
			from: new Date("2020", "2", "21", "10", "0"),
			to: new Date("2020", "2", "21", "10", "15"),
			type: "Type01",
			tentative: false
		},{
			title: "Max Musterdivers",
			from: new Date("2020", "2", "21", "10", "0"),
			to: new Date("2020", "2", "21", "10", "15"),
			type: "Type03",
			tentative: false
		},{
			title: "Max Mustermann",
			from: new Date("2020", "2", "21", "10", "0"),
			to: new Date("2020", "2", "21", "10", "15"),
			type: "Type03",
			tentative: false
		},{
			title: "Max Musterfrau",
			from: new Date("2020", "2", "21", "10", "0"),
			to: new Date("2020", "2", "21", "10", "15"),
			type: "Type03",
			tentative: false
		},{
			title: "Max Musterdivers",
			from: new Date("2020", "2", "21", "10", "0"),
			to: new Date("2020", "2", "21", "10", "15"),
			type: "Type03",
			tentative: false
		},{
			title: "Max Mustermann",
			from: new Date("2020", "2", "21", "10", "0"),
			to: new Date("2020", "2", "21", "10", "15"),
			type: "Type03",
			tentative: false
		},{
			title: "Max Musterfrau",
			from: new Date("2020", "2", "21", "10", "0"),
			to: new Date("2020", "2", "21", "10", "15"),
			type: "Type03",
			tentative: false
		},{
			title: "Max Musterdivers",
			from: new Date("2020", "2", "21", "10", "0"),
			to: new Date("2020", "2", "21", "10", "15"),
			type: "Type03",
			tentative: false
		},{
			title: "Max Mustermann",
			from: new Date("2020", "2", "21", "10", "0"),
			to: new Date("2020", "2", "21", "10", "15"),
			type: "Type03",
			tentative: false
		},{
			title: "Max Musterfrau",
			from: new Date("2020", "2", "21", "10", "0"),
			to: new Date("2020", "2", "21", "10", "15"),
			type: "Type03",
			tentative: false
		},{
			title: "Max Musterdivers",
			from: new Date("2020", "2", "21", "10", "0"),
			to: new Date("2020", "2", "21", "10", "15"),
			type: "Type03",
			tentative: false
		}]
	};

	return JSONModel.extend("com.wir.vs.virus.timeslots.ShopOwner.model.SlotsModel", {
		shopId: undefined,
		load: function (sShopId) {
			if (sShopId === this.shopId) {
				this.updateBindings();
				return Promise.resolve();
			}
			this.shopId = sShopId;
			return new Promise(function (resolve, reject) {
				this.setData(dummyData);
				resolve();
			}.bind(this));
		},

		editSlots: function () {
			// todo allow slot editing
			return Promise.resolve();
		},

		createSlot: function () {
			// todo allow slot creation
			return Promise.resolve();
		},

		deleteSlot: function () {
			// todo allow slot deletion
			return Promise.resolve();
		}
	});
});