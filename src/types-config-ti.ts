/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const ChartCardExternalConfig = t.iface([], {
  "type": t.lit('custom:apexcharts-card'),
  "config_templates": t.opt(t.union(t.array("string"), "string")),
  "color_list": t.opt(t.array("string")),
  "locale": t.opt("string"),
  "experimental": t.opt(t.iface([], {
    "color_threshold": t.opt("boolean"),
    "disable_config_validation": t.opt("boolean"),
    "hidden_by_default": t.opt("boolean"),
    "brush": t.opt("boolean"),
  })),
  "hours_12": t.opt("boolean"),
  "chart_type": t.opt("ChartCardChartType"),
  "update_interval": t.opt("string"),
  "update_delay": t.opt("string"),
  "all_series_config": t.opt("ChartCardAllSeriesExternalConfig"),
  "series": t.array("ChartCardSeriesExternalConfig"),
  "graph_span": t.opt("string"),
  "span": t.opt("ChartCardSpanExtConfig"),
  "y_axis_precision": t.opt("number"),
  "now": t.opt(t.iface([], {
    "show": t.opt("boolean"),
    "color": t.opt("string"),
    "label": t.opt("string"),
  })),
  "show": t.opt(t.iface([], {
    "loading": t.opt("boolean"),
  })),
  "cache": t.opt("boolean"),
  "stacked": t.opt("boolean"),
  "layout": t.opt("string"),
  "apex_config": t.opt("any"),
  "header": t.opt("ChartCardHeaderExternalConfig"),
  "style": t.opt("any"),
  "card_mod": t.opt("any"),
  "view_layout": t.opt("any"),
  "index": t.opt("number"),
  "view_index": t.opt("number"),
  "brush": t.opt("ChartCardBrushExtConfig"),
  "yaxis": t.opt(t.array("ChartCardYAxisExternal")),
});

export const ChartCardChartType = t.union(t.lit('line'), t.lit('scatter'), t.lit('pie'), t.lit('donut'), t.lit('radialBar'));

export const ChartCardBrushExtConfig = t.iface([], {
  "selection_span": t.opt("string"),
  "apex_config": t.opt("any"),
});

export const ChartCardSpanExtConfig = t.iface([], {
  "start": t.opt("ChartCardStartEnd"),
  "end": t.opt("ChartCardStartEnd"),
  "offset": t.opt("string"),
});

export const ChartCardStartEnd = t.union(t.lit('minute'), t.lit('hour'), t.lit('day'), t.lit('week'), t.lit('month'), t.lit('year'), t.lit('isoWeek'));

export const ChartCardAllSeriesExternalConfig = t.iface([], {
  "entity": t.opt("string"),
  "attribute": t.opt("string"),
  "name": t.opt("string"),
  "type": t.opt(t.union(t.lit('line'), t.lit('column'), t.lit('area'))),
  "color": t.opt("string"),
  "opacity": t.opt("number"),
  "curve": t.opt(t.union(t.lit('smooth'), t.lit('straight'), t.lit('stepline'))),
  "stroke_width": t.opt("number"),
  "extend_to_end": t.opt("boolean"),
  "unit": t.opt("string"),
  "invert": t.opt("boolean"),
  "data_generator": t.opt("string"),
  "float_precision": t.opt("number"),
  "min": t.opt("number"),
  "max": t.opt("number"),
  "offset": t.opt("string"),
  "fill_raw": t.opt("GroupByFill"),
  "show": t.opt("ChartCardSeriesShowConfigExt"),
  "group_by": t.opt(t.iface([], {
    "duration": t.opt("string"),
    "func": t.opt("GroupByFunc"),
    "fill": t.opt("GroupByFill"),
    "start_with_last": t.opt("boolean"),
  })),
  "transform": t.opt("string"),
  "color_threshold": t.opt(t.array("ChartCardColorThreshold")),
  "yaxis_id": t.opt("string"),
});

export const ChartCardSeriesShowConfigExt = t.iface([], {
  "as_duration": t.opt("ChartCardPrettyTime"),
  "legend_value": t.opt("boolean"),
  "in_header": t.opt(t.union("boolean", t.lit('raw'), t.lit('before_now'), t.lit('after_now'))),
  "name_in_header": t.opt("boolean"),
  "header_color_threshold": t.opt("boolean"),
  "in_chart": t.opt("boolean"),
  "datalabels": t.opt(t.union("boolean", t.lit('total'))),
  "hidden_by_default": t.opt("boolean"),
  "extremas": t.opt(t.union("boolean", t.lit('time'))),
  "in_brush": t.opt("boolean"),
  "offset_in_name": t.opt("boolean"),
});

export const ChartCardSeriesExternalConfig = t.iface(["ChartCardAllSeriesExternalConfig"], {
  "entity": "string",
});

export const ChartCardPrettyTime = t.union(t.lit('millisecond'), t.lit('second'), t.lit('minute'), t.lit('hour'), t.lit('day'), t.lit('week'), t.lit('month'), t.lit('year'));

export const GroupByFill = t.union(t.lit('null'), t.lit('last'), t.lit('zero'));

export const GroupByFunc = t.union(t.lit('raw'), t.lit('avg'), t.lit('min'), t.lit('max'), t.lit('last'), t.lit('first'), t.lit('sum'), t.lit('median'), t.lit('delta'), t.lit('diff'));

export const ChartCardHeaderExternalConfig = t.iface([], {
  "show": t.opt("boolean"),
  "floating": t.opt("boolean"),
  "title": t.opt("string"),
  "show_states": t.opt("boolean"),
  "colorize_states": t.opt("boolean"),
  "standard_format": t.opt("boolean"),
});

export const ChartCardColorThreshold = t.iface([], {
  "value": "number",
  "color": t.opt("string"),
  "opacity": t.opt("number"),
});

export const ChartCardYAxisExternal = t.iface([], {
  "id": t.opt("string"),
  "show": t.opt("boolean"),
  "opposite": t.opt("boolean"),
  "min": t.opt(t.union(t.lit('auto'), "number", "string")),
  "max": t.opt(t.union(t.lit('auto'), "number", "string")),
  "apex_config": t.opt("any"),
});

const exportedTypeSuite: t.ITypeSuite = {
  ChartCardExternalConfig,
  ChartCardChartType,
  ChartCardBrushExtConfig,
  ChartCardSpanExtConfig,
  ChartCardStartEnd,
  ChartCardAllSeriesExternalConfig,
  ChartCardSeriesShowConfigExt,
  ChartCardSeriesExternalConfig,
  ChartCardPrettyTime,
  GroupByFill,
  GroupByFunc,
  ChartCardHeaderExternalConfig,
  ChartCardColorThreshold,
  ChartCardYAxisExternal,
};
export default exportedTypeSuite;
