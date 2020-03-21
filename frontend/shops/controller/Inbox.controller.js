sap.ui.define([
	"com/wir/vs/virus/timeslots/ShopOwner/controller/DetailsPage.controller",
	"sap/ui/core/routing/History"
], function (
	DetailsPageController,
	History
) {
	"use strict";

	return DetailsPageController.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.Inbox", {
		sRoute: "Inbox"
	});
});