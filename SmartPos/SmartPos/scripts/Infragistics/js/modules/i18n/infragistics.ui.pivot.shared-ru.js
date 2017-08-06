/*!@license
* Infragistics.Web.ClientUI Pivot Shared localization resources 16.2.20162.2141
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

    if (!$.ig.PivotShared) {
        $.ig.PivotShared = {};

        $.extend($.ig.PivotShared, {
            locale: {
                invalidDataSource: "Предоставленный источник данных либо null, либо не поддерживается.",
                measureList: "Меры",
                ok: "OK",
                cancel: "Отмена",
                addToMeasures: "Добавить в меры",
                addToFilters: "Добавить в фильтры",
                addToColumns: "Добавить в колонки",
                addToRows: "Добавить в ряды"
            }
        });
    }
}));// REMOVE_FROM_COMBINED_FILES