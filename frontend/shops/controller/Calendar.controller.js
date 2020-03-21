sap.ui.define([
	"com/wir/vs/virus/timeslots/ShopOwner/controller/DetailsPage.controller",
	"com/wir/vs/virus/timeslots/ShopOwner/model/models"
], function (
	DetailsPageController,
	models
) {
	"use strict";
	
	return DetailsPageController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.Calendar", {
		sRoute: "Calendar",

		onInit: function () {
			DetailsPageController.prototype.onInit.apply(this);
		},

		_onObjectMatched : function (oEvent) {
			DetailsPageController.prototype._onObjectMatched.apply(this, [oEvent]);
			var sId = oEvent.getParameter("arguments").id;
			this.getView().getModel("slots").load(sId);
			this.getView().getModel("slotsConfig").load(sId);
		},

		formatStartHour: function (sFrom) {
			if (!sFrom) {
				return;
			}
			return Number.parseInt(sFrom.split(":")[0]);
		},

		formatEndHour: function (sTo) {
			if (!sTo) {
				return;
			}

			var nEndTime =  Number.parseInt(sTo.split(":")[0]);
			var bRoundUp = sTo.split(":")[1] !== "00";
			return bRoundUp ? nEndTime + 1 : nEndTime;
		}
	});
});