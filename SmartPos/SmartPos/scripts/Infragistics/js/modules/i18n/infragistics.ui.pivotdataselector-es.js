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
                invalidBaseElement: " no se admite como elemento base. Use DIV en su lugar.",
                catalog: "Catálogo",
                cube: "Cubo",
                measureGroup: "Medir grupo",
                measureGroupAll: "(Todo)",
                rows: "Filas",
                columns: "Columnas",
                measures: "Medidas",
                filters: "Filtros",
                deferUpdate: "Aplazar actualización",
                updateLayout: "Actualizar diseño",
                selectAll: "Seleccionar todo"
            }
        });
    }
}));// REMOVE_FROM_COMBINED_FILES