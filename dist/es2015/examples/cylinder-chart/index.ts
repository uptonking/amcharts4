import * as amcharts4 from "@amcharts/amcharts4/core";
import * as charts from "@amcharts/amcharts4/charts";
import AnimatedTheme from "@amcharts/amcharts4/themes/animated";


amcharts4.useTheme(AnimatedTheme);

let chart = amcharts4.create("chartdiv", charts.XYChart3D);

chart.data = [{
    "country": "USA",
    "visits": 3025
}, {
    "country": "China",
    "visits": 1882
}, {
    "country": "Japan",
    "visits": 1809
}, {
    "country": "Germany",
    "visits": 1322
}, {
    "country": "UK",
    "visits": 1122
}, {
    "country": "France",
    "visits": 1114
}, {
    "country": "India",
    "visits": 984
}, {
    "country": "Spain",
    "visits": 711
}, {
    "country": "Netherlands",
    "visits": 665
}, {
    "country": "Russia",
    "visits": 580
}, {
    "country": "South Korea",
    "visits": 443
}, {
    "country": "Canada",
    "visits": 441
}];

let categoryAxis = chart.xAxes.push(new charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 60;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.baseGrid.disabled = true;
categoryAxis.renderer.axisFills.template.disabled = true;
categoryAxis.renderer.labels.template.dy = 20;

let valueAxis = chart.yAxes.push(new charts.ValueAxis());
valueAxis.renderer.grid.template.disabled = true;
valueAxis.renderer.baseGrid.disabled = true;
valueAxis.renderer.labels.template.disabled = true;
valueAxis.renderer.axisFills.template.disabled = true;
valueAxis.renderer.minWidth = 0;

let series = chart.series.push(new charts.ConeSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "visits";
series.columns.template.tooltipText = "{valueY.value}";
series.columns.template.tooltipY = 0;
series.columns.template.strokeOpacity = 1;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", (fill, target) => {
    return chart.colors.getIndex(target.dataItem.index);
});

series.columns.template.adapter.add("stroke", (stroke, target) => {
    return chart.colors.getIndex(target.dataItem.index);
});