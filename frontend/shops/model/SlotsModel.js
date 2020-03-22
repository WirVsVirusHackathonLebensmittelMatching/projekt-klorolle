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

				aData.forEach(function (oDate) {
					var oStartDate = new Date(oDate.dateStart);
					oDate.startsInMin = Math.round((oStartDate - oNow) / (60 * 1000));
					if (oDate.startsInMin + oDate.duration >= 0) {
						oDate.state = oDate.startsInMin < 0 ? "now" : "future";
					} else {
						oDate.state = "past";
					}
				});
				this.setData({
					all: aData,
					now: aData.filter(function (oData) {
						return oData.state === "now";
					}),
					upcoming: aData.filter(function (oData) {
						return oData.state === "future" /*&& oData.startsInMin < 60*/;
					})
				});
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