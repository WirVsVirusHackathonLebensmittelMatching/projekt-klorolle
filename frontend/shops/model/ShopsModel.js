sap.ui.define(["sap/ui/model/json/JSONModel","com/wir/vs/virus/timeslots/ShopOwner/utils/Connection"],function(t,i){"use strict";return t.extend("com.wir.vs.virus.timeslots.ShopOwner.model.ShopsModel",{load:function(){this.setData(this.loadData("/api/v1/shops/"))},findByName:function(t){var i=this.getData();return i.find(function(i){return i.name===t})},login:function(t){return Promise.resolve()},registerShop:function(t){return i.post("/api/v1/shops",JSON.stringify(t))}})});