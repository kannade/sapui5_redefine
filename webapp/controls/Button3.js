sap.ui.define([
	'sap/m/ButtonRenderer'
], function(
	ButtonRenderer
) {
	"use strict";

	var Button = sap.m.Button.extend("nickcode_ru_redefine.controls.Button3", {
		renderer: ButtonRenderer
	});
	
	//переопределили метод
		Button.prototype.setText = function(sText) {
		var sValue = this.getText();

		if (sText === null || sText === undefined) {
			sText = "";
		}

		if (sValue !== sText) {
			var oDomRef = this.getDomRef("content");
			var bShouldSupressRendering = !!oDomRef;

			// Render control if element is not available in the DOM
			//this.setProperty("text", sText, bShouldSupressRendering);
			this.setProperty("text", sText + "_123", bShouldSupressRendering);

			if (bShouldSupressRendering) {
				// Get text to have the type conversation for non-string values done by the framework
				sText = this.getText();
				oDomRef.innerHTML = jQuery.sap.encodeHTML(sText);
				this.$("inner").toggleClass("sapMBtnText", !!sText);
			}
		}

		return this;
	};


	return Button;

});
