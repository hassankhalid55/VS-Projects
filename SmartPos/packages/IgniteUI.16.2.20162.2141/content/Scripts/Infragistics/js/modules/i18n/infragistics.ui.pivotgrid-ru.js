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
                filtersHeader: "Перенесите поля для фильтрования сюда",
                measuresHeader: "Перенесите данные сюда",
                rowsHeader: "Перенесите поля для рядов сюда",
                columnsHeader: "Перенесите поля для колонок сюда",
                disabledFiltersHeader: "Поля для фильтрования",
                disabledMeasuresHeader: "Данные",
                disabledRowsHeader: "Поля для рядов",
                disabledColumnsHeader: "Поля для колонок",
                noSuchAxis: "Ось не существует"
            }
        });
    }
}));// REMOVE_FROM_COMBINED_FILES