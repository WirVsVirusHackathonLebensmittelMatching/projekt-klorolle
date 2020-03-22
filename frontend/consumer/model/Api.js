/**
 * global jQuery
 */

sap.ui.define([
    "sap/ui/base/Object",
    "sap/base/Log"
], function (BaseObject, Log) {
	"use strict";

	return BaseObject.extend("com.wir.vs.virus.timeslots.Consumer.model.Api", {
        constructor: function(sBasePath)
        {
            BaseObject.apply(this, arguments);

            sBasePath = String(sBasePath);
            if (!sBasePath.endsWith("/")) {
                sBasePath += "/";
            }
            this._sBasePath = sBasePath;
        },

        get: function(sPath)
        {
            return this._request(sPath, "GET");
        },

        post: function(sPath)
        {
            return this._request(sPath, "POST");
        },

        put: function(sPath)
        {
            return this._request(sPath, "PUT");
        },

        merge: function(sPath)
        {
            return this._request(sPath, "MERGE");
        },

        delete: function(sPath)
        {
            return this._request(sPath, "DELETE");
        },

        /**
         * Send a request to the API.
         * @param {String} sPath Path to the API endpoint, relative to the API base path.
         * @param {String} sMethod HTTP method. May be e.g. "GET", "POST", "PUT", etc.
         * @returns {Promise} A promise which is either resolved with the data returned by the endpoint 
         * or rejected with the error message returned by the endpoint.
         */
        _request: function(sPath, sMethod = "GET") 
        {
            sPath = this._buildPath(sPath);
            Log.debug("Sending " + sMethod + " request to " + sPath);

            return new Promise(function(resolve, reject) {
                jQuery.ajax({
                    url: sPath,
                    dataType: "json"
                }).done(function(data, textStatus) {
                    Log.debug("Call to " + sPath + " successful: " + textStatus);
                    resolve(data);
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    if (errorThrown)
                    {
                        Log.error("Call to " + sPath + " failed: " + textStatus, errorThrown.toString());
                    } else {
                        Log.error("Call to " + sPath + " failed: " + textStatus);
                    }
                    reject(textStatus);
                });
            });
        },

        /**
         * Build the absolute path to the API endpoint.
         * @param {String} sPath The path relative to the API base path.
         * @returns {String} Absolute path to the API endpoint.
         */
        _buildPath: function(sPath) {
            sPath = String(sPath);
            
            if (sPath.startsWith("/")) {
                sPath = sPath.substring(1);
            }

            return this._sBasePath + sPath;
        }
    });
});