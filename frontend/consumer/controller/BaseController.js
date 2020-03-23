sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/ValueState",
	"sap/m/MessageToast",
	"sap/ui/core/routing/History",
	"../model/formatter"
], function (
	Controller,
	UIComponent,
	JSONModel,
	ValueState,
	MessageToast,
	History,
	formatter
) {
	"use strict";
	
	return Controller.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.BaseController", {
		formatter: formatter,

		createViewModel: function(oData) {
			this.getView().setModel(new JSONModel(oData), "view");
		},

		getViewModel: function() {
			return this.getModel("view");
		},
		
		getModel: function(sModelName) {
			return this.getView().getModel(sModelName);
		},

		getRouter: function() {
			return UIComponent.getRouterFor(this);
		},

		navTo: function(sRoute, oParameters) {
			this.getRouter().navTo(sRoute, oParameters);
		},

		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("login", undefined, true);
			}
		},

		setErrorState: function(sId, sTextKey) {
			var oControl = this.getView().byId(sId);
			if (oControl && oControl.setValueState) {
				oControl.setValueState(ValueState.Error);
			}
			if (sTextKey && oControl && oControl.setValueStateText)
			{
				oControl.setValueStateText(this.getText(sTextKey));
			}
		},

		clearErrorState: function(sId) {
			var oControl = this.getView().byId(sId);
			if (oControl && oControl.setValueState) {
				oControl.setValueState(ValueState.None);
			}
			if (oControl && oControl.setValueStateText)
			{
				oControl.setValueStateText();
			}
		},

		getText: function(sKey, aValues) {
			return this.getModel("i18n").getResourceBundle().getText(sKey, aValues);
		},

		showMessage: function(sTextKey, aValues) {
			MessageToast.show(this.getText(sTextKey, aValues));
		}
	});
});