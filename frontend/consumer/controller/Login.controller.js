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
	
	return BaseController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.Login", {
		onInit: function () {
			this.createViewModel({
				login: {
					username: "",
					password: "",
					state: ValueState.None
				}
			});
		},

		onLogin: function(bAsGuest) {
			if (bAsGuest) {
				this.getRouter().navTo("guestSearch");
			} else {
				if (this._loginOk()) {
					this.getModel("view").setProperty("/login/state", ValueState.Success);
					this.getRouter().navTo("account");
				 } else {
					 this.getModel("view").setProperty("/login/state", ValueState.Error);
				 }
			}
		},

		_loginOk: function() {
			let oLogin = this.getViewModel().getProperty("/login");
			if (oLogin && oLogin.username && oLogin.password) {
				return this.getModel("account").login(oLogin.username, oLogin.password);
			} else {
				return false;
			}
		}
	});
});