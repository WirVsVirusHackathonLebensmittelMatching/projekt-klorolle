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
			this.id = sId;
			this.getView().getModel("shop").load(this.sId);
		},

		onNavBack: function () {
			this.oRouter.navTo("Main", {id: this.sId}, true);
		},

		onConfirmSlotConfig: function () {
			var oView = this.getView();
			var oConfig = {
				from: oView.byId("shoppingTimeFrom").getValue(),
				to: oView.byId("shoppingTimeTo").getValue(),
				slotDuration: Number.parseInt(oView.byId("slotDuration").getValue()),
				parallelSlots: Number.parseInt(oView.byId("parallelSlots").getValue())
			};

			this.getView().getModel("shop").editSlotsConfig(oConfig);

			this.oRouter.navTo("Main", {id: this.sId}, true);
		}
	});
});