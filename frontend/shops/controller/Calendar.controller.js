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
			this.getView().getModel("shop").load(sId);
		},

		formatStartHour: function (oShop) {
			if (!oShop || !oShop.timeslots) {
				return;
			}
			var sFrom = oShop.timeslots.timeFrom;
			return Number.parseInt(sFrom.split(":")[0]);
		},

		formatEndHour: function (oShop) {
			if (!oShop || !oShop.timeslots) {
				return;
			}
			var sTo = oShop.timeslots.timeTo;
			var nEndTime =  Number.parseInt(sTo.split(":")[0]);
			var bRoundUp = sTo.split(":")[1] !== "00";
			return bRoundUp ? nEndTime + 1 : nEndTime;
		}
	});
});