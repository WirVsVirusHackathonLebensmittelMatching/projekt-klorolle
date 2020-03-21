sap.ui.define([
	"com/wir/vs/virus/timeslots/ShopOwner/controller/DetailsPage.controller"
], function (
	DetailsPageController,
) {
	"use strict";

	return DetailsPageController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.SlotConfig", {
		sRoute: "SlotConfig",

		onInit: function () {
			DetailsPageController.prototype.onInit.apply(this);
		},

		_onObjectMatched : function (oEvent) {
			DetailsPageController.prototype._onObjectMatched.apply(this, [oEvent]);
			var sId = oEvent.getParameter("arguments").id;
			this.getView().getModel("slotsConfig").load(sId);
		},

		onNavBack: function () {
			this.oRouter.navTo("Main", {id: this.sId}, true);
		},

		onConfirmSlotConfig: function () {
			var oView = this.getView();
			var oConfig = {
				timeFrom: oView.byId("shoppingTimeFrom").getValue(),
				timeTo: oView.byId("shoppingTimeTo").getValue(),
				slotDuration: Number.parseInt(oView.byId("slotDuration").getValue()),
				parallelSlots: Number.parseInt(oView.byId("parallelSlots").getValue())
			};

			this.getView().getModel("slotsConfig").editSlotsConfig(oConfig);

			this.oRouter.navTo("Main", {id: this.sId}, true);
		}
	});
});