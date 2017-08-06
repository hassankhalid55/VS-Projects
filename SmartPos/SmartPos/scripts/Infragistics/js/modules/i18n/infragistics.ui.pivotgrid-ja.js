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
                filtersHeader: "フィルター フィールドをここにドロップ",
                measuresHeader: "データ項目をここにドロップ",
                rowsHeader: "行フィールドをここにドロップ",
                columnsHeader: "列フィールドをここにドロップ",
                disabledFiltersHeader: "フィルター フィールド",
                disabledMeasuresHeader: "データ項目",
                disabledRowsHeader: "行フィールド",
                disabledColumnsHeader: "列フィールド",
                noSuchAxis: "指定した軸はありません。"
            }
        });
    }
}));// REMOVE_FROM_COMBINED_FILES