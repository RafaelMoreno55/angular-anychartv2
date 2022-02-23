import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import 'anychart';

@Component({
  selector: 'app-variable-report',
  templateUrl: './variable-report.component.html',
  styleUrls: ['./variable-report.component.css'],
})
export class VariableReportComponent implements OnInit {
  constructor(private location: Location) {}
  @ViewChild('chartContainer') container;
  gauge: anychart.charts.LinearGauge = null;

  ngOnInit() {
    // Do not use the absolute path of the svg definitions.
    anychart.graphics.useAbsoluteReferences(false);
    var stage = anychart.graphics.create(this.container.nativeElement);

    // create data
    var data = [72.56];

    // set the gauge type
    this.gauge = anychart.gauges.linear();

    // set the data for the gauge
    this.gauge.data(data);

    // set the layout
    this.gauge.layout('horizontal');

    // create a color scale
    var scaleBarColorScale = anychart.scales.ordinalColor().ranges([
      {
        from: 0,
        to: 25,
        color: ['#D81E05', '#EB7A02'],
      },
      {
        from: 25,
        to: 50,
        color: ['#EB7A02', '#FFD700'],
      },
      {
        from: 50,
        to: 75,
        color: ['#FFD700', '#CAD70b'],
      },
      {
        from: 75,
        to: 100,
        color: ['#CAD70b', '#2AD62A'],
      },
    ]);

    // create a Scale Bar
    var scaleBar = this.gauge.scaleBar(0);

    // set the height and offset of the Scale Bar (both as percentages of the gauge height)
    scaleBar.width('5%');
    scaleBar.offset('31.5%');

    // use the color scale (defined earlier) as the color scale of the Scale Bar
    scaleBar.colorScale(scaleBarColorScale);

    // add a marker pointer
    var marker = this.gauge.marker(0);

    // set the offset of the pointer as a percentage of the gauge width
    marker.offset('43%');

    // set the color of the marker
    marker.color('black');

    // set the width of the marker
    marker.width('15');

    // set the marker type
    marker.type('triangle-up');

    // set the zIndex of the marker
    marker.zIndex(10);

    // configure the scale
    var scale = this.gauge.scale();
    scale.minimum(0);
    scale.maximum(100);
    scale.ticks().interval(10);

    // configure the axis
    var axis = this.gauge.axis();
    axis.minorTicks(true);
    axis.minorTicks().stroke('#cecece');
    axis.width('1%');
    axis.offset('29.5%');
    axis.orientation('top');

    // format axis labels
    axis.labels().format('{%value}%');

    // set paddings
    this.gauge.padding([0, 50]);

    // set the container id
    this.gauge.container(stage);

    // initiate drawing the gauge
    this.gauge.draw();
  }

  goToBack(): void {
    this.location.back();
  }
}
