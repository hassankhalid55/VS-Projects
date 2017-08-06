/*!@license
* Infragistics.Web.ClientUI Scroll localization resources 16.2.20162.2141
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

    if (!$.ig.Scroll) {
	    $.ig.Scroll = {};

	    $.extend($.ig.Scroll, {
		    locale: {
		        errorNoElementLink: 'El elemento que se está vinculando no existe.',
		        errorNoScrollbarLink: 'El elemento de la barra de desplazamiento que se está vinculando no existe.'
		    }
	    });

    }
}));// REMOVE_FROM_COMBINED_FILES
