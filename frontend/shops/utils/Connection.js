sap.ui.define([], function () {
	"use strict";

	function send(sUrl, sMethod, sData) {
		return new Promise(function (resolve, reject) {
			jQuery.ajax({
				method : sMethod,
				url : sUrl,
				contentType : "application/json; charset=utf-8",
				dataType : "json",
				data : sData,
			}).done(function () {
				resolve();
			});
		});
	}

	return {
		post : function (sUrl, sData) {
			return send(sUrl, "POST", sData);
		}
	};
});