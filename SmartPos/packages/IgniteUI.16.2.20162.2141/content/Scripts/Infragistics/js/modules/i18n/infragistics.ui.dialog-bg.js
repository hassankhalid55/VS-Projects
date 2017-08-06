/*!@license
* Infragistics.Web.ClientUI Dialog localization resources 16.2.20162.2141
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

    if (!$.ig.Dialog) {
	    $.ig.Dialog = {
		    locale: {
			    closeButtonTitle: "Затвори",
			    minimizeButtonTitle: "Минимизирай",
			    maximizeButtonTitle: "Максимизирай",
			    pinButtonTitle: "Закачи",
			    unpinButtonTitle: "Откачи",
			    restoreButtonTitle: "Възстанови",
				setOptionError: 'Стойността на следната опция не може да бъде променяна след инициализация: '
		    }
	    };
    }
}));// REMOVE_FROM_COMBINED_FILES
