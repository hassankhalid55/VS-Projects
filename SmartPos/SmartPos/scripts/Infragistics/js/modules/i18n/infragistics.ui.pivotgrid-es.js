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
                filtersHeader: "Soltar campos de filtro aquí",
                measuresHeader: "Soltar elementos de datos aquí",
                rowsHeader: "Soltar campos de fila aquí",
                columnsHeader: "Soltar campos de columna aquí",
                disabledFiltersHeader: "Campos de filtro",
                disabledMeasuresHeader: "Elementos de datos",
                disabledRowsHeader: "Campos de fila",
                disabledColumnsHeader: "Campos de columna",
                noSuchAxis: "No hay tal eje"
            }
        });
    }
}));// REMOVE_FROM_COMBINED_FILES