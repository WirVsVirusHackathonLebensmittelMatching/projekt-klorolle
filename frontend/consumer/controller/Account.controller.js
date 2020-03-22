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
	
	return BaseController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.Account", {
		onInit: function () {
			this.getRouter().getRoute("account").attachPatternMatched(this.onPatternMatched, this);
		},

		onPatternMatched: function() 
		{
			if (!this.getModel("account").isLoggedIn()) {
				this.navTo("login");
			}
		},
	});
});