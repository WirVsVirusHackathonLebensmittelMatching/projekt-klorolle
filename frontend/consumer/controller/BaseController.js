sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/ValueState"
], function (
	Controller,
	UIComponent,
	JSONModel,
	ValueState
) {
	"use strict";
	
	return Controller.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.BaseController", {
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

		navTo: function(sRoute) {
			this.getRouter().navTo(sRoute);
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
		}
	});
});