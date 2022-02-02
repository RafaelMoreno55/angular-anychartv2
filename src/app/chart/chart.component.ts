/// <reference types="anychart" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { DemoDataProviderService } from '../demo-data-provider.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'anychart';
import { log } from 'console';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  subscription: Subscription;

  constructor(
    private dataService_: DemoDataProviderService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.subscription = this.dataService_.dataSetChanged$.subscribe((dataSet) =>
      this.chart.data(this.dataService_.getData(dataSet))
    );
  }

  @ViewChild('chartContainer') container;

  chart: anychart.charts.Pie = null;
  indexSeleccionado: number;

  ngOnInit() {
    // Do not use the absolute path of the svg definitions.
    anychart.graphics.useAbsoluteReferences(false);
    // Default data set mapping, hardcoded here.
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
    console.log(row);
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
    this.chart.bounds('0', '0', '50%', '100%');
  }

  ngAfterViewInit() {
    this.chart.container(this.container.nativeElement);
    this.chart.draw();
  }
}
