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
                invalidDataSource: "La source de données spécifiée est nulle ou n'est pas prise en charge.",
                measureList: "Mesures",
                ok: "OK",
                cancel: "Annuler",
                addToMeasures: "Ajouter aux Mesures",
                addToFilters: "Ajouter aux Filtres",
                addToColumns: "Ajouter aux Colonnes",
                addToRows: "Ajouter aux Lignes"
            }
        });
    }
}));// REMOVE_FROM_COMBINED_FILES