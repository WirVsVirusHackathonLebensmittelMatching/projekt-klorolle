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
			return this.loadData("/api/v1/shops/" + this.shopId + "/orders/").then(function () {
				var aData = this.getData();
				var oNow = new Date();

				aData = [{
					"id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
					"customer": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
					"shop": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
					"dateStart": "Sun Mar 22 2020 15:44:39 GMT+0100 (Central European Standard Time)",
					"duration": 120,
					"type": "shopYourself",
					"status": "",
					"comment": "string"
				},{
					"id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
					"customer": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
					"shop": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
					"dateStart": "Sun Mar 22 2020 14:44:39 GMT+0100 (Central European Standard Time)",
					"duration": 20,
					"type": "shopYourself",
					"status": "",
					"comment": "string"
				},{
					"id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
					"customer": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
					"shop": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
					"dateStart": "Sun Mar 22 2020 16:14:39 GMT+0100 (Central European Standard Time)",
					"duration": 20,
					"type": "shopYourself",
					"status": "",
					"comment": "string"
				}];

				aData.forEach(function (oDate) {
					var oStartDate = new Date(oDate.dateStart);
					oDate.startsInMin = Math.round((oStartDate - oNow) / (60 * 1000));
					if (oDate.startsInMin + oDate.duration >= 0) {
						oDate.state = oDate.startsInMin < 0 ? "now" : "future";
					} else {
						oDate.state = "past";
					}
				});
				this.setData(aData);
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