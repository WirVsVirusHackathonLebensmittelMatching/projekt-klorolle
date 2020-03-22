sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/GroupHeaderListItem"
], function (
	Controller,
	GroupHeaderListItem
) {
	"use strict";

	function findName(oController, sId) {
		var oData = oController.getView().getModel("shops").getData();
		var oShop = oData.find(function (oShop) {
			return oShop.id === sId;
		});
		return oShop.name;
	}
	
	return Controller.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.Main", {
		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("Main").attachPatternMatched(this._onObjectMatched, this);
		},
		
		_onObjectMatched: function (oEvent) {
			var sId = oEvent.getParameter("arguments").id;
			this.sId = sId;

			this.byId("page").setTitle(findName(this, sId));

			this.getView().getModel("goods").load(this.sId);
			this.getView().getModel("shop").load(this.sId);
			this.getView().getModel("slots").load(this.sId);
		},

		onGoodChanged: function (oEvent) {
			var oBindingContext = oEvent.getSource().getBindingContext("goods");
			var sStatus = oEvent.getParameter("selectedItem").getKey();
			this.getView().getModel("goods").changeGood(oBindingContext.getPath(), sStatus);
		},
		
		toSlotsConfig: function () {
			this.oRouter.navTo("SlotConfig", {id: this.sId});
		},

		toCalendar: function () {
			this.oRouter.navTo("Calendar", {id: this.sId});
		},

		toGoods: function () {
			this.oRouter.navTo("Goods", {id: this.sId});
		},

		getGroupHeader: function (oGroup){
			return new GroupHeaderListItem({
				title: oGroup.key,
				upperCase: false
			});
		},

		formatInMins: function (nInMins) {
			return "in " + nInMins + " Min";
		},

		onOrderPress: function (oEvent) {
			var oBindingContext = oEvent.getSource().getBindingContext("slots");
			var sOrderId = oBindingContext.getModel().getProperty(oBindingContext.getPath()).id;
			this.oRouter.navTo("Order", {id: this.sId, orderId: sOrderId});
		}
	});
});