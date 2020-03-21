sap.ui.define([], function () {
	"use strict";

	function send(sUrl, sMethod, vData) {
		vData = typeof vData === "object" ? JSON.stringify(vData) : vData;

		return new Promise(function (resolve, reject) {
			jQuery.ajax({
				method : sMethod,
				url : sUrl,
				contentType : "application/json; charset=utf-8",
				dataType : "json",
				data : vData,
			})
			.done(resolve)
			.fail(reject);
		});
	}

	return {
		post: function (sUrl, vData) {
			return send(sUrl, "POST", vData);
		},
		put: function (sUrl, vData) {
			return send(sUrl, "PUT", vData);
		},
		remove: function (sUrl) {
			return send(sUrl, "DELETE");
		}
	};
});