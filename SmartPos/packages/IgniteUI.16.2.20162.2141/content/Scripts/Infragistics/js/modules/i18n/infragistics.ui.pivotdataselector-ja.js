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
                invalidBaseElement: " はベース要素としてサポートされていません。代わりに DIV を使用してください。",
                catalog: "カタログ",
                cube: "キューブ",
                measureGroup: "メジャー グループ",
                measureGroupAll: "(すべて)",
                rows: "行",
                columns: "列",
                measures: "メジャー",
                filters: "フィルター",
                deferUpdate: "更新を遅延する",
                updateLayout: "レイアウトの更新",
                selectAll: "すべて選択"
            }
        });
    }
}));// REMOVE_FROM_COMBINED_FILES