sap.ui.define([
	"com/wir/vs/virus/timeslots/ShopOwner/controller/DetailsPage.controller",
	"com/wir/vs/virus/timeslots/ShopOwner/model/models"
], function (
	DetailsPageController,
	models
) {
	return DetailsPageController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.Calendar", {
		sRoute: "Calendar",

		onInit: function () {
			DetailsPageController.prototype.onInit.apply(this);
		},

		_onObjectMatched : function (oEvent) {
			DetailsPageController.prototype._onObjectMatched.apply(this, [oEvent]);
			this.sId = oEvent.getParameter("arguments").id;
			this.getView().getModel("slots").load(this.sId);
			this.getView().getModel("shop").load(this.sId);
		},

		formatStartHour: function (oShop) {
			if (!oShop || !oShop.timeslots) {
				return;
			}
			var sFrom = oShop.timeslots.from;
			return Number.parseInt(sFrom.split(":")[0]);
		},

		formatEndHour: function (oShop) {
			if (!oShop || !oShop.timeslots) {
				return;
			}
			var sTo = oShop.timeslots.to;
			var nEndTime =  Number.parseInt(sTo.split(":")[0]);
			var bRoundUp = sTo.split(":")[1] !== "00";
			return bRoundUp ? nEndTime + 1 : nEndTime;
		},

		handleAppointmentSelect: function (oEvent) {
			var oAppointment = oEvent.getParameter("appointment");
			if (oAppointment) {
				var sOrderId = oAppointment.getCustomData("id")[0].getValue();
				this.oRouter.navTo("Order", {id: this.sId, orderId: sOrderId});
			}
		},

		formatTitle: function (sType) {
			return sType === "shopYourself" ? "Einkauf" : "ClickAndCollect";
		},

		formatType: function (sType) {
			return sType === "shopYourself" ? "Type03" : "Type01";
		},

		formatStartDate: function (sStartDate) {
			return new Date(sStartDate);
		},

		formatEndDate: function (sStartDate, sDuration) {
			return new Date(new Date(sStartDate).getTime() + sDuration * 60000);
		}
	});

	"use strict";
});