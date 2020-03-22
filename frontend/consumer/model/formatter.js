sap.ui.define([
    "sap/ui/core/ValueState"
], function (ValueState) {
	"use strict";

	return {
        goodStatusText: function(sStatus)
        {
            return this.getText("goodStatus." + sStatus);
        },

        goodStatusState: function(sStatus)
        {
            switch (sStatus)
            {
                case "available":
                    return ValueState.Success;
                case "short":
                    return ValueState.Warning;
                case "empty":
                    return ValueState.Error;
                case "unknown":
                default:
                    return ValueState.None;
            }
        },

        orderTypeText: function(sOrderType)
        {
            switch(sOrderType)
            {
                case 'shopYourself':
                    return this.getText("shopping");
                case 'clickAndCollect':
                    return this.getText("pickup");
                default:
                    return sOrderType;
            }
            
        },

        orderStatusText: function(sOrderStatus)
        {
            switch(sOrderStatus)
            {
                case 'rejected':
                    return this.getText("rejected");
                default:
                    return "";
            }
        }
	};
});