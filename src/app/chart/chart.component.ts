/// <reference types="anychart" />
import { Component, OnInit, ViewChild } from '@angular/core';
//import { DemoDataProviderService } from '../demo-data-provider.service';
//import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'anychart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  //subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {
    /*     private dataService_: DemoDataProviderService,
     */
    /* this.subscription = this.dataService_.dataSetChanged$.subscribe((dataSet) =>
      this.chart.data(this.dataService_.getData(dataSet))
    ); */
  }

  @ViewChild('chartContainer') container;

  gauge: anychart.charts.LinearGauge = null;
  gauge1: anychart.charts.LinearGauge = null;
  gauge2: anychart.charts.LinearGauge = null;
  gauge3: anychart.charts.LinearGauge = null;
  gauge4: anychart.charts.LinearGauge = null;
  // chart: anychart.charts.Pie = null;
  selectedIndex!: number;
  isShowInfo: boolean = false;

  ngOnInit() {
    // Do not use the absolute path of the svg definitions.
    anychart.graphics.useAbsoluteReferences(false);
    var stage = anychart.graphics.create(this.container.nativeElement);
    var data = [170, 210, 130, 310];
    this.gauge1 = anychart.gauges.tank();
    this.gauge1.data(data);
    this.gauge1.addPointer(0);

    this.gauge1.bounds(0, 0, '25%', '100%');
    this.gauge1.container(stage);
    this.gauge1.draw();
    this.gauge2 = anychart.gauges.tank();
    this.gauge2.data(data);
    this.gauge2.addPointer(1);
    this.gauge2.bounds('25%', 0, '25%', '100%');
    this.gauge2.container(stage);
    this.gauge2.draw();
    this.gauge3 = anychart.gauges.tank();
    this.gauge3.data(data);
    this.gauge3.addPointer(2);
    this.gauge3.bounds('50%', 0, '25%', '100%');
    this.gauge3.container(stage);
    this.gauge3.draw();
    this.gauge4 = anychart.gauges.tank();
    this.gauge4.data(data);
    this.gauge4.addPointer(3);
    this.gauge4.bounds('75%', 0, '25%', '100%');
    this.gauge4.container(stage);
    this.gauge4.draw();

    /*  // Default data set mapping, hardcoded here.
    this.chart = anychart.pie(this.dataService_.getData('data1'));
    this.chart.title('Ventas del empresa');
    const self = this;
    this.chart.listen('pointsSelect', function (e) {
      self.indexSeleccionado = e['currentPoint'].index;
      self.router.navigate(['/details', self.indexSeleccionado]);
    });

    // ascending order
    this.chart.sort('asc');
    // configure max labels
    let rowsCount = this.chart.data().getRowsCount();
    var row = this.chart.data().row(rowsCount - 1);
    //console.log(row);
    this.chart.label().enabled(true);
    this.chart.label().padding(10, 10);
    this.chart.label().width('25%');
    //this.chart.label().height('25%');
    this.chart.label().hAlign('center');
    this.chart.label().text(row['info1']);
    this.chart.label().hAlign('center');
    this.chart.label().background({
      enabled: true,
      fill: 'White',
      stroke: '2 gold',
      cornerType: 'round-inner',
      corners: 5,
    });
    // setting the limits of the chart
    this.chart.bounds('0', '0', '50%', '100%');*/
  }

  /* ngAfterViewInit() {
    this.chart.container(this.container.nativeElement);
    this.chart.draw();
  } */

  ShowInfo(): void {
    this.isShowInfo = true;
  }
}
