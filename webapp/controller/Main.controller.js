sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"nickcode_ru_redefine/controls/Button",
	"nickcode_ru_redefine/controls/Button3"
], function(Controller, Button, Button3) {
	"use strict";

	return Controller.extend("nickcode_ru_redefine.controller.Main", {

		onInit: function() {
			var oButton = new Button({
				text: "button_from_js"
			});
			
			this.getView().byId("idPage").addContent(oButton);
			
			
			var oButton3 = new Button3({
				text: ""
			});
			
			this.getView().byId("idPage").addContent(oButton3);
			oButton3.setText("button_from_js3");
		}

	});
});