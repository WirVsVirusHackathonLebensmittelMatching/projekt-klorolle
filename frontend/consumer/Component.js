sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/wir/vs/virus/timeslots/Consumer/model/models",
	"sap/base/util/UriParameters"
], function (UIComponent, Device, models, UriParameters) {
	"use strict";

	return UIComponent.extend("com.wir.vs.virus.timeslots.Consumer.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			UIComponent.prototype.init.apply(this, arguments);

			//Check if mockdata parameter in the URL is ste to true
			let oParameters = UriParameters.fromURL(window.location.href);
			let bUseMockData = oParameters.has("mockdata") && oParameters.get("mockdata") === "true";
			//Initialize main model
			this.getModel().init(bUseMockData);

			this.getRouter().initialize();
		}
	});
});