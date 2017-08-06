/*!@license
* Infragistics.Web.ClientUI Splitter localization resources 16.2.20162.2141
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define( [
			"jquery"
		], factory );
	} else {
		factory(jQuery);
	}
}
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Splitter) {
	$.ig.Splitter = {};

	$.extend($.ig.Splitter, {
		locale: {
		    errorPanels: 'El número de paneles no puede ser superior a dos.',
		    errorSettingOption: 'Error al ajustar la opción.'
		}
	});

}
}));// REMOVE_FROM_COMBINED_FILES
