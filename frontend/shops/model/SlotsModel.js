sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";

	var dummdData = {
		startDate: new Date(),
		people: [{
			name: "Abholungen",
			appointments: [{
				start: new Date("2020", "9", "20", "10", "0"),
				end: new Date("2020", "11", "15", "12", "0"),
				type: "Type07",
				tentative: false
			},
			{
				start: new Date("2020", "0", "15", "08", "30"),
				end: new Date("2020", "0", "15", "09", "30"),
				type: "Type02",
				tentative: false
			},
			{
				start: new Date("2020", "0", "15", "10", "0"),
				end: new Date("2020", "0", "15", "12", "0"),
				info: "room 1",
				type: "Type01",
				tentative: false
			},
			{
				start: new Date("2020", "0", "15", "11", "30"),
				end: new Date("2020", "0", "15", "13", "30"),
				info: "canteen",
				type: "Type03",
				tentative: true
			},
			{
				start: new Date("2020", "0", "15", "13", "30"),
				end: new Date("2020", "0", "15", "17", "30"),
				info: "online meeting",
				type: "Type02",
				tentative: false
			},
			{
				start: new Date("2020", "0", "16", "00", "1"),
				end: new Date("2020", "0", "16", "23", "59"),
				info: "Online meeting",
				type: "Type04",
				tentative: false
			},
			{
				start: new Date("2020", "0", "18", "08", "30"),
				end: new Date("2020", "0", "18", "09", "30"),
				type: "Type02",
				tentative: false
			},
			{
				start: new Date("2020", "0", "18", "11", "30"),
				end: new Date("2020", "0", "18", "13", "30"),
				info: "canteen",
				type: "Type03",
				tentative: true
			},
			{
				start: new Date("2020", "0", "18", "1", "0"),
				end: new Date("2020", "0", "18", "22", "0"),
				info: "regular",
				type: "Type01",
				tentative: false
			},
			{
				start: new Date("2020", "0", "21", "00", "30"),
				end: new Date("2020", "0", "21", "23", "30"),
				info: "room 105",
				type: "Type03",
				tentative: true
			},
			{
				start: new Date("2020", "0", "25", "11", "30"),
				end: new Date("2020", "0", "25", "13", "30"),
				type: "Type03",
				tentative: true
			},
			{
				start: new Date("2020", "0", "29", "10", "0"),
				end: new Date("2020", "0", "29", "12", "0"),
				info: "room 1",
				type: "Type01",
				tentative: false
			},
			{
				start: new Date("2020", "0", "30", "08", "30"),
				end: new Date("2020", "0", "30", "09", "30"),
				type: "Type02",
				tentative: false
			},
			{
				start: new Date("2020", "0", "30", "10", "0"),
				end: new Date("2020", "0", "30", "12", "0"),
				info: "room 1",
				type: "Type01",
				tentative: false
			},
			{
				start: new Date("2020", "0", "30", "11", "30"),
				end: new Date("2020", "0", "30", "13", "30"),
				type: "Type03",
				tentative: true
			},
			{
				start: new Date("2020", "0", "30", "13", "30"),
				end: new Date("2020", "0", "30", "17", "30"),
				type: "Type02",
				tentative: false
			},
			{
				start: new Date("2020", "0", "31", "10", "00"),
				end: new Date("2020", "0", "31", "11", "30"),
				info: "Online meeting",
				type: "Type04",
				tentative: false
			},
			{
				start: new Date("2020", "1", "1", "1", "0"),
				end: new Date("2020", "1", "2", "22", "0"),
				info: "regular",
				type: "Type07",
				tentative: false
			},
			{
				start: new Date("2020", "1", "3", "08", "30"),
				end: new Date("2020", "1", "13", "09", "30"),
				type: "Type02",
				tentative: false
			},
			{
				start: new Date("2020", "1", "4", "10", "0"),
				end: new Date("2020", "1", "4", "12", "0"),
				info: "room 1",
				type: "Type01",
				tentative: false
			},
			{
				start: new Date("2020", "2", "30", "10", "0"),
				end: new Date("2020", "4", "33", "12", "0"),
				type: "Type07",
				tentative: false
			},
			{
				start: new Date("2020", "8", "1", "00", "30"),
				end: new Date("2020", "10", "15", "23", "30"),
				info: "room 207",
				type: "Type03",
				tentative: true
			}]
		}
	]};

	return JSONModel.extend("com.wir.vs.virus.timeslots.ShopOwner.model.SlotsModel", {
		load: function (sShopName) {
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