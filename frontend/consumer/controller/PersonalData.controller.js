sap.ui.define([
	"./BaseController"
], function (
	BaseController
) {
	"use strict";
	
	return BaseController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.PersonalData", {
		onInit: function () {
			this.getRouter().getRoute("personalData").attachPatternMatched(this.onPatternMatched, this);
		},

		onPatternMatched: function() 
		{
			if (!this.getModel("account").isLoggedIn()) {
				this.navTo("login");
			}
		},

		onSaveData: function()
		{
			let bSuccess = this.getModel("account").updateAccountData();
			if (bSuccess) {
				this.navTo("account");
			} else {
				this.showMessage("accountSaveFailed");
			}
		},

		onCancel: function()
		{
			this.getModel("account").reloadAccountData();
		}
	});
});