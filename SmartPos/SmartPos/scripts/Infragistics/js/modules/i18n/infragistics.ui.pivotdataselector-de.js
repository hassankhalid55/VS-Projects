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
                invalidBaseElement: " wird nicht als Basiselement unterstützt. Stattdessen DIV verwenden.",
                catalog: "Katalog",
                cube: "Cube",
                measureGroup: "Measuregruppe",
                measureGroupAll: "(Alle)",
                rows: "Zeilen",
                columns: "Spalten",
                measures: "Measures",
                filters: "Filter",
                deferUpdate: "Aktualisierung verzögern",
                updateLayout: "Layout aktualisieren",
                selectAll: "Alle auswählen"
            }
        });
    }
}));// REMOVE_FROM_COMBINED_FILES