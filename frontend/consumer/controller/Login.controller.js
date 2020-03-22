sap.ui.define([
	"./BaseController",
	"sap/m/ButtonType",
	"sap/ui/core/ValueState"
], function (
	BaseController,
	ButtonType,
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
				},
				deleteData: {
					inProgress: false
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

		onRemoveData: function() {
			if (this.getViewModel().getProperty("/deleteData/inProgress")) {
				//Second press, execute
				let bSuccess = this.getModel("account").clearData();
				if (bSuccess)
				{
					this.getViewModel().setProperty("/deleteData/inProgress", false);
					this.showMessage("deleteLocalDataSuccess");
					this.byId("removeData").setType(ButtonType.Ghost);
				} else {
					this.showMessage("deleteLocalDataFailure");
				}
			} else {
				//First press, start progress
				this.getViewModel().setProperty("/deleteData/inProgress", true);
				this.showMessage("confirmDeletion");
				this.byId("removeData").setType(ButtonType.Reject);
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