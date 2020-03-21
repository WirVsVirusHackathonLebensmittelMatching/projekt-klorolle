sap.ui.define([
	"com/wir/vs/virus/timeslots/ShopOwner/controller/DetailsPage.controller",
	"com/wir/vs/virus/timeslots/ShopOwner/model/models"
], function (
	DetailsPageController,
	models
) {
	"use strict";

	return DetailsPageController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.SlotConfig", {
		sRoute: "SlotConfig",

		onInit: function () {
			DetailsPageController.prototype.onInit.apply(this);
			this.oSlotsConfigModel = models.createSlotsConfigModel();
			this.getView().setModel(this.oSlotsConfigModel, "slotsConfig");
		},

		_onObjectMatched : function (oEvent) {
			DetailsPageController.prototype._onObjectMatched.apply(this, [oEvent]);
			var sId = oEvent.getParameter("arguments").id;
			this.oSlotsConfigModel.load(sId);
		},

		onNavBack: function () {
			this.oRouter.navTo("Main", {id: this.sId}, true);
		},

		onConfirmSlotConfig: function () {
			var oView = this.getView();
			var oConfig = {
				timeFrom: oView.byId("shoppingTimeFrom").getValue(),
				timeTo: oView.byId("shoppingTimeTo").getValue(),
				slotDuration: oView.byId("slotDuration").getValue(),
				parallelSlots: oView.byId("parallelSlots").getValue()
			};

			this.oSlotsConfigModel.editSlotsConfig(oConfig);

			this.oRouter.navTo("Main", {id: this.sId}, true);
		}
	});
});