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

        /**
         * Read initial shop list from backend.
         * @param {Boolean} bUseMockData If true, mock data is used instead of the live data.
         */
        init: function(bUseMockData)
        {
            if (bUseMockData) {
                this._live = false;
                this.loadData(this._settings.mockdata);
            } else {
                this.refreshShops();
            }
        },

        /**
         * Search for shops by postal/ZIP code code. Updates the model path /shops.
         * @param {String} sQuery ZIP code.
         */
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
         * Refresh the shop list. Rereads all shops and updates the model path /shops.
         */
        refreshShops: function()
        {
            if (this._live)
            {
                this._api.get("/shops").then(function(oData) {
                    this.setProperty("/shops", oData);
                }.bind(this));
            }
        },

		/**
		 * Select the currently displayed shop. Updates the model path at /shop.
		 * @param {String} sShopId The ID of the shop.
		 */
		selectShop: function(sShopId) {
			if (this._live)
			{
				this._api.get("/shops/" + encodeURL(sShopId)).then(function(oData) {
					this.setProperty("/shop", oData);
					this._updateGoods();
				}.bind(this));
			}
		},

		findNextFastLane: function(sShopId, bNextDay) {
			var oRequestedDate = new Date();
			if (bNextDay) {
				oRequestedDate = new Date(new Date(oRequestedDate).getTime() + (24 * 60 * 60 * 1000));
			}
			var dd = String(oRequestedDate.getDate()).padStart(2, '0');
			var mm = String(oRequestedDate.getMonth() + 1).padStart(2, '0'); //January is 0!
			var yyyy = oRequestedDate.getFullYear();
			var date = yyyy + '-' + mm + '-' + dd;

			return this._api.get("/shops/" + encodeURL(sShopId) + "/orders/nextTimeslot/" + date).then(function(oData) {
				this.setProperty("/order", oData);
				return oData;
			}.bind(this));
		},

		confirmOrder: function (oOrder) {
			return this._api.post("/shops/" + oOrder.shop + "/orders/", JSON.stringify(oOrder));
		},

        /**
         * Update goods for the currently selected shop.
         */
        _updateGoods: function()
        {
            if (this._live)
            {
                let sShopId = this.getProperty("/shop/id");
                this._api.get("/shops/" + encodeURL(sShopId) + "/goods").then(function(oData) {
                    this.setProperty("/shop/goods", oData);
                }.bind(this));
            }
        }
    });
});