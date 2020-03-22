sap.ui.define([
    "sap/ui/model/json/JSONModel",
	"com/wir/vs/virus/timeslots/Consumer/model/Api"
], function (JSONModel, Api) {
	"use strict";

	return JSONModel.extend("com.wir.vs.virus.timeslots.Consumer.model.OrderModel", {
		findNextFastLane: function (sShopId) {
            var dummySuggestion = {
                "shop": sShopId,
                "dateStart": "Sun Mar 22 2020 12:44:39 GMT+0100 (Central European Standard Time)",
                "duration": 20,
                "type": "",
                "comment": ""
            };

            this.setData(dummySuggestion);
	        return Promise.resolve(dummySuggestion);
        },

        confirm: function(oOrder) {
			return Api.post("/api/v1/shops/" + oOrder.shop + "/orders/", JSON.stringify(oOrder));
        }
    });
});