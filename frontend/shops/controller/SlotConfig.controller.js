sap.ui.define([
	"com/wir/vs/virus/timeslots/ShopOwner/controller/DetailsPage.controller"
], function (
	DetailsPageController
) {
	"use strict";

	return DetailsPageController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.SlotConfig", {
		sRoute: "SlotConfig",

		onNavBack: function () {
			this.oRouter.navTo("Main", {name: this.sName}, true);
		},

		onConfirmSlotConfig: function () {
			var oView = this.getView();
			var oConfig = {
				timeFrom: oView.byId("shoppingTimeFrom").getValue(),
				timeTo: oView.byId("shoppingTimeTo").getValue(),
				slotDuration: oView.byId("slotDuration").getValue(),
				parallelSlots: oView.byId("parallelSlots").getValue()
			};

			// TODO: trigger the save :)

			this.oRouter.navTo("Main", {name: this.sName}, true);
		}
	});
});