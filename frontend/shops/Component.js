sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/wir/vs/virus/timeslots/ShopOwner/model/models"],function(e,o,t){"use strict";return e.extend("com.wir.vs.virus.timeslots.ShopOwner.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();var o=t.createShopModel();this.setModel(o,"shop");var s=t.createShopsModel();this.setModel(s,"shops");s.load();var i=t.createSlotsModel();this.setModel(i,"slots");var r=t.createGoodsModel();this.setModel(r,"goods")}})});