/*!@license
* Infragistics.Web.ClientUI Pivot Grid localization resources 16.2.20162.2141
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global define, jQuery */
(function (factory) {
	if (typeof define === "function" && define.amd) {
		define( ["jquery"], factory );
	} else {
		factory(jQuery);
	}
}
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.PivotGrid) {
        $.ig.PivotGrid = {};

        $.extend($.ig.PivotGrid, {
            locale: {
                filtersHeader: "Пусни филтърните полета тук",
                measuresHeader: "Пусни данните тук",
                rowsHeader: "Пусни полетата за редове тук",
                columnsHeader: "Пусни полетата за колони тук",
                disabledFiltersHeader: "Полета за филтриране",
                disabledMeasuresHeader: "Данни",
                disabledRowsHeader: "Полета за редове",
                disabledColumnsHeader: "Полета за колони",
                noSuchAxis: "Няма такава ос"
            }
        });
    }
}));// REMOVE_FROM_COMBINED_FILES