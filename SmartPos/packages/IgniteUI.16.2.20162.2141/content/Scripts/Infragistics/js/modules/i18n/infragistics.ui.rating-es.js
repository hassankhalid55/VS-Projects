/*!@license
* Infragistics.Web.ClientUI Rating localization resources 16.2.20162.2141
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

    if (!$.ig.Rating) {
	    $.ig.Rating = {};

	    $.extend($.ig.Rating, {
		    locale: {
			    setOptionError: 'Los cambios en el tiempo de ejecución no están permitidos para la siguiente opción: '
		    }
	    });
    }
}));// REMOVE_FROM_COMBINED_FILES
