sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "com/wir/vs/virus/timeslots/Consumer/model/Api",
    "sap/base/security/encodeURL"
], function (JSONModel, Api, encodeURL) {
	"use strict";

	return JSONModel.extend("com.wir.vs.virus.timeslots.Consumer.model.ApiModel", {
        constructor: function() {
            JSONModel.apply(this, arguments);

            this._settings = arguments[0];
            this._api = new Api(this._settings.apiBase);
            this._live = true;
        },

        init: function(bUseMockData)
        {
            if (bUseMockData) {
                this._live = false;
                this.loadData(this._settings.mockdata);
            } else {
                this.refreshShops();
            }
        },

        searchShops: function(sQuery)
        {
            if (!sQuery) {
                this.refreshShops();
            } else {
                if (this._live) {
                    this._api.get("/shops/byPostalCode/" + encodeURL(sQuery)).then(function(oData) {
                        this.setProperty("/shops", oData);
                    }.bind(this));
                }
            }
        },

        /**
         * Refresh the shop list.
         */
        refreshShops: function()
        {
            if (this._live)
            {
                this._api.get("/shops").then(function(oData) {
                    this.setProperty("/shops", oData);
                }.bind(this));
            }
        }
    });
});