sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History"],function(t,e){"use strict";return t.extend("com.wir.vs.virus.timeslots.ShopOwner.controller.DetailsPage",{onInit:function(){this.oRouter=sap.ui.core.UIComponent.getRouterFor(this);this.oRouter.getRoute(this.sRoute).attachPatternMatched(this._onObjectMatched,this)},onNavBack:function(){var t=e.getInstance();var o=t.getPreviousHash();if(o!==undefined){window.history.go(-1)}else{this.oRouter.navTo("Main",{id:this.sId},true)}},_onObjectMatched:function(t){this.sId=t.getParameter("arguments").id}})});