sap.ui.define([], function () {
	"use strict";

	var mItems = {
		Lebensmittel: [
			"Nudeln",
			"Fertig-Suppen",
			"Mehl",
			"Zucker",
			"Hefe",
			"Reis",
			"Konserven",
			"Gemüse",
			"Obst",
			"Pesto",
			"Wasser",
			"Brot",
			"Haferflocken",
			"Kartoffeln",
			"Milch",
			"Gemüse",
			"Obst",
			"Nüsse",
			"Fisch",
			"Fleisch",
			"Eier",
			"Fette/Öle",
			"Süßigkeiten",
			"TK-Waren",
			"Honig",
			"Marmelade"
		],
		Hygiene: [
			"Desinfektionsmittel",
			"Toiletten Papier",
			"Seifen"
		]
	};

	var aItems = [];
	Object.keys(mItems).forEach(function (sCategory) {
		var aItemsInCategory = mItems[sCategory];
		aItemsInCategory.forEach(function (sItemName) {
			aItems.push({
				name : sItemName,
				category : sCategory,
				status : "unknown"
			})
		});
	});

	return aItems;
});