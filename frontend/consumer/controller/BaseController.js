sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (
	Controller,
	UIComponent,
	JSONModel
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
		}
	});
});