sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.component", {
        metadata : {
            manifest: "json"
        },
        init : function () {
            // Call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            
            // Set data models
            var oData = {
                recipient : {
                    name :  "UI5"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);
        }
    });
});