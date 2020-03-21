sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (
	Controller
) {
	"use strict";
	
	return Controller.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.BaseController", {
		getModel: function(sModelName) {
			return this.getView().getModel(sModelName);
		}
	});
});