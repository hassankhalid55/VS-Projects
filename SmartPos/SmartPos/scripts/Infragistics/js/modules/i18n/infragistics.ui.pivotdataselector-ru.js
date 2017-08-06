/*!@license
* Infragistics.Web.ClientUI Pivot Data Selector localization resources 16.2.20162.2141
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

    if (!$.ig.PivotDataSelector) {
        $.ig.PivotDataSelector = {};

        $.extend($.ig.PivotDataSelector, {
            locale: {
                invalidBaseElement: " не может быть использован в качестве базового элемента. Вместо этого используйте DIV.",
                catalog: "Каталог",
                cube: "Куб",
                measureGroup: "Группа Мер",
                measureGroupAll: "(Все)",
                rows: "Ряды",
                columns: "Колонки",
                measures: "Меры",
                filters: "Фильтры",
                deferUpdate: "Задержать Обновление",
                updateLayout: "Обновить Раскладку",
                selectAll: "Выбрать Все"
            }
        });
    }
}));// REMOVE_FROM_COMBINED_FILES