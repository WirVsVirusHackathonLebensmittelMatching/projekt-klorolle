sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/util/Storage"
], function (JSONModel, Storage) {
	"use strict";

    const STORAGE_PREFIX = "klopa.account.";

	return JSONModel.extend("com.wir.vs.virus.timeslots.Consumer.model.AccountModel", {
        constructor: function() {
            JSONModel.apply(this, arguments);
            this._storage = new Storage(Storage.Type.local, STORAGE_PREFIX);
            this._loggedIn = false;

            //Start with empty account data
            this.setData({
                username: "NOT LOGGED IN",
                passwordSalt: "",
                passwordHash: "",
                firstName: "",
                lastName: "",
                email: "",
                zipCode: "",
                city: "",
                phoneNumber: ""
            });
        },

        /**
         * Register a new user.
         * @param {String} sUserName The user name of the new user.
         * @param {String} sPassword The password of the new user.
         * @returns {Boolean} true if the new user was created, false if the new user was not created.
         */
        register: function(sUserName, sPassword) {
            var oData = this._storage.get(sUserName);
            if (oData) {
                //Username already taken
                return false;
            }
            this._loggedIn = true;

            this.setProperty("/username", sUserName);
            //Set password
            let sSalt = undefined; //TODO: Generate
            this.setProperty("/passwordSalt", sSalt);
            this.setProperty("/passwordHash", this._hash(sPassword, sSalt));
            return this.updateAccountData();
        },

        /**
         * Update the account data in the local storage.
         * @returns true if the update was successful, false otherwise.
         */
        updateAccountData: function() {
            return this._storage.put(this.getProperty("/username"), this.getData());
        },

        /**
         * Discard all changes and reload the user data from the local storage.
         */
        reloadAccountData: function() {
            var oData = this._storage.get(this.getProperty("/username"));
            if (oData)
            {
                this.setData(oData);
            }
        },

        /**
         * Log in process. First validates the user name and password, then if successful load user data into the model.
         * @param {String} sUserName the user name.
         * @param {String} sPassword The password.
         * @returns {Boolean} true if the login was successful and the data was loaded, false if the login failed.
         */
        login: function(sUserName, sPassword) {
            var oData = this._storage.get(sUserName);
            if (!oData) {
                //Username unknown
                return false;
            }

            if (this._hash(sPassword, oData.passwordSalt) !== oData.passwordHash)
            {
                //Incorrect password
                return false;
            }

            //Login OK, load data
            this.setData(oData);
            this._loggedIn = true;
            return true;
        },

        /**
         * Check if the user is currently logged in.
         * @returns true if the user is logged in, false otherwise.
         */
        isLoggedIn: function() {
            return this._loggedIn;
        },

        /**
         * Clear all stored data.
         * @returns true if the data was deleted successfully, false otherwise.
         */
        clearData: function() {
            return this._storage.removeAll("");
        },

        /**
         * Securely hash a password.
         * @param {String} sPassword The password.
         * @param {String} sSalt The salt. Optional.
         */
        _hash: function(sPassword, sSalt) {
            //TODO: Secure hashing using Web Crypto API
            //https://developer.mozilla.org/en-US/docs/Web/API/Crypto
            return sPassword;
        }
    });
});