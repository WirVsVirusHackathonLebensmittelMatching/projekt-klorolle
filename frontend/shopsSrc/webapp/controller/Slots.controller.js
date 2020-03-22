sap.ui.define([
	"com/wir/vs/virus/timeslots/ShopOwner/controller/DetailsPage.controller"
], function (
	DetailsPageController
) {
	"use strict";

	return DetailsPageController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.Slots", {
		sRoute : "Slots",
		oSlotsModel : undefined,

		_onObjectMatched : function (oEvent) {
			DetailsPageController.prototype.init.apply(this);
			this.oSlotsModel = this.oSlotsModel || new SlotsModel();
		}
	});
});