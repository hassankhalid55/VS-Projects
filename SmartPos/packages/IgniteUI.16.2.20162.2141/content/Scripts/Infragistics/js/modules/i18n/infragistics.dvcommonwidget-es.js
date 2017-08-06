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
			    seriesName: "debe especificar la opción de nombre de la serie al establecer las opciones.",
			    axisName: "debe especificar la opción de nombre del eje al establecer las opciones.",
			    invalidLabelBinding: "No existe ningún valor para las etiquetas de enlace.",
			    invalidSeriesAxisCombination: "Combinación no válida de los tipos de serie y de ejes: ",
			    close: "Cerrar",
			    overview: "Información general",
			    zoomOut: "Alejar",
			    zoomIn: "Acercar",
			    resetZoom: "Restablecer zoom",
			    seriesUnsupportedOption: "el tipo de serie actual no es compatible con la opción: ",
			    seriesTypeNotLoaded: "el archivo JavaScript que contiene el tipo de serie solicitado no se ha cargado o el tipo de serie no es válido: ",
			    axisTypeNotLoaded: "el archivo JavaScript que contiene el tipo de eje solicitado no se ha cargado o el tipo de eje no es válido:",
			    axisUnsupportedOption: "el tipo de eje actual no es compatible con la opción: "
		    }
	    });

    }
}));// REMOVE_FROM_COMBINED_FILES
