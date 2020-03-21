sap.ui.define([
	"com/wir/vs/virus/timeslots/ShopOwner/controller/DetailsPage.controller"
], function (
	DetailsPageController
) {
	"use strict";
	
	return DetailsPageController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.Calendar", {
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("Calendar").attachPatternMatched(this._onObjectMatched, this);
		}
	});
});