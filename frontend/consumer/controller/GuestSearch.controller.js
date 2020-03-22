sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/ValueState"
], function (
	BaseController,
	JSONModel,
	ValueState
) {
	"use strict";
	
	return BaseController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.GuestSearch", {
		onInit: function () {
			this.createViewModel({
				search: {
					zipCode: ""
				}
			});
		},

		onSearch: function(bAsGuest) {
			this.getRouter().navTo("searchByZipCode", {
				zipCode: this.getViewModel().getProperty("/search/zipCode")
			});
		}
	});
});