sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment"
], function (
	Controller,
	Fragment
) {
	"use strict";

	var bNameValid = false;
	var bPostalCodeValid = false;
	
	return Controller.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.Login", {
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
		},
		
		onLogin: function (oEvent) {
			var oSource = oEvent.getSource();
			var sShopName = oSource.getSelectedKey();
			this.oRouter.navTo("Main", {id: sShopName});
		},
		
		createDialog: function () {
			return Fragment.load({
				name : "com/wir/vs/virus/timeslots/ShopOwner/fragments/Registry",
				id: "registry_fragment",
				controller : {
					onRegistryConfirm: function () {
						var sShopName = sap.ui.getCore().byId("registry_fragment--shopNameInput").getValue();
						var sPostalCode = sap.ui.getCore().byId("registry_fragment--shopPostalCodeInput").getValue();
						var nPostalCode = Number.parseInt(sPostalCode);
						this.getView().getModel("shops").registerShop({
							name: sShopName,
							postalCode: nPostalCode
						}).then(function () {
							this.oDialog.close();
							this.oRouter.navTo("SlotConfig", {id: sShopName});
						}.bind(this));
					}.bind(this),
					onRegistryCancel: function () {
						this.oDialog.close();
					}.bind(this),
					onNameLiveChange: function (oEvent) {
						var sValue = oEvent.getParameter("value");
						bNameValid = !!sValue;
						sap.ui.getCore().byId("registry_fragment--registerConfirm").setEnabled(bNameValid && bPostalCodeValid);
					},
					onPostalCodeLiveChange: function (oEvent) {
						var sValue = oEvent.getParameter("value");
						bPostalCodeValid = sValue.length === 5;
						sap.ui.getCore().byId("registry_fragment--registerConfirm").setEnabled(bNameValid && bPostalCodeValid);
					}
				}
			});
		},
		
		onRegister: function () {
			if(!this.oDialog) {
				this.createDialog()
				.then(function (oDialog) {
					this.oDialog = oDialog;
					this.getView().addDependent(this.oDialog);
					this.oDialog.open();
				}.bind(this));
			} else {
				this.byId("shopNameInput").setValue("");
				this.getControl("registerConfirm").setEnabled(false);
				this.oDialog.open();
			}
		}
	});
});