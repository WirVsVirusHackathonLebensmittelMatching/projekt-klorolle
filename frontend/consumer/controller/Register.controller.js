sap.ui.define([
	"./BaseController",
	"sap/m/MessageToast"
], function (BaseController, MessageToast) {
	"use strict";
	
	return BaseController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.Account", {
		onInit: function () {
			this.createViewModel({
				registration: {
					username: "",
					password: "",
					passwordRepeat: ""
				}
			});
		},
		
		onRegister: function()
		{
			var oRegistration = this.getViewModel().getProperty("/registration");
			var bOk = true;
			
			if (!oRegistration || !oRegistration.username) {
				this.setErrorState("username", "usernameRequired");
				bOk = false;
			} else {
				this.clearErrorState("username");
			}

			if (!oRegistration || !oRegistration.password) {
				this.setErrorState("password", "passwordRequired");
				bOk = false;
			} else {
				this.clearErrorState("password");
			}

			if (!oRegistration || !oRegistration.passwordRepeat || oRegistration.passwordRepeat !== oRegistration.password) {
				this.setErrorState("passwordRepeat", "passwordsNotEqual");
				bOk = false;
			} else {
				this.clearErrorState("passwordRepeat");
			}

			if (bOk) {
				let bSuccess = this.getModel("account").register(oRegistration.username, oRegistration.password);
				if (bSuccess) {
					this.navTo("personalData");
				} else {
					this.showMessage("registrationFailed");
				}
			}
		}
	});
});