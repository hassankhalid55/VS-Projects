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
                invalidDataSource: "La fuente de datos pasada es cero o no se admite.",
                measureList: "Medidas",
                ok: "Aceptar",
                cancel: "Cancelar",
                addToMeasures: "Agregar a medidas",
                addToFilters: "Agregar a filtros",
                addToColumns: "Agregar a columnas",
                addToRows: "Agregar a filas"
            }
        });
    }
}));// REMOVE_FROM_COMBINED_FILES