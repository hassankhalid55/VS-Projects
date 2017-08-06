/*!@license
* Infragistics.Web.ClientUI common DV widget localization resources 16.2.20162.2141
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

    if (!$.ig.Chart) {
	    $.ig.Chart = {};

	    $.extend($.ig.Chart, {

		    locale: {
			    seriesName: "muss beim Einstellen von Optionen die Option Datenreihenname angeben.",
			    axisName: "muss beim Einstellen von Optionen die Option Achsenname angeben.",
			    invalidLabelBinding: "Es gibt keinen solchen Wert für die zu bindenden Bezeichnungen.",
			    invalidSeriesAxisCombination: "Ungültige Kombination aus Reihen- und Achsentypen: ",
			    close: "Schließen",
			    overview: "Übersicht",
			    zoomOut: "Verkleinern",
			    zoomIn: "Vergrößern",
			    resetZoom: "Zoom zurücksetzen",
			    seriesUnsupportedOption: "der aktuelle Reihentyp unterstützt nicht die Option: ",
			    seriesTypeNotLoaded: "die den geforderten Reihentyp enthaltende JavaScript-Datei wurde nicht geladen oder der Reihentyp ist ungültig: ",
			    axisTypeNotLoaded: "die den geforderten Achsentyp enthaltende JavaScript-Datei wurde nicht geladen oder der Achsentyp ist ungültig: ",
			    axisUnsupportedOption: "der aktuelle Achsentyp unterstützt nicht die Option: "
		    }
	    });

    }
}));// REMOVE_FROM_COMBINED_FILES
