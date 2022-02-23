import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import 'anychart';

@Component({
  selector: 'app-sector-report',
  templateUrl: './sector-report.component.html',
  styleUrls: ['./sector-report.component.css'],
})
export class SectorReportComponent implements OnInit {
  constructor(private router: Router) {}

  @ViewChild('chartContainer') container;

  gauge1: anychart.charts.LinearGauge = null;
  gauge2: anychart.charts.LinearGauge = null;
  gauge3: anychart.charts.LinearGauge = null;
  gauge4: anychart.charts.LinearGauge = null;

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
    const self = this;
    this.gauge1.listen('pointClick', function (e) {
      self.selectedIndex = 1;
      self.router.navigate(['/subsectorreport', self.selectedIndex]);
    });
    this.gauge1.bounds(0, 0, '25%', '100%');
    this.gauge1.container(stage);
    this.gauge1.draw();
    this.gauge2 = anychart.gauges.tank();
    this.gauge2.data(data);
    this.gauge2.addPointer(1);
    this.gauge2.listen('pointClick', function (e) {
      self.selectedIndex = 2;
      self.router.navigate(['/subsectorreport', self.selectedIndex]);
    });
    this.gauge2.bounds('25%', 0, '25%', '100%');
    this.gauge2.container(stage);
    this.gauge2.draw();
    this.gauge3 = anychart.gauges.tank();
    this.gauge3.data(data);
    this.gauge3.addPointer(2);
    this.gauge3.listen('pointClick', function (e) {
      self.selectedIndex = 3;
      self.router.navigate(['/subsectorreport', self.selectedIndex]);
    });
    this.gauge3.bounds('50%', 0, '25%', '100%');
    this.gauge3.container(stage);
    this.gauge3.draw();
    this.gauge4 = anychart.gauges.tank();
    this.gauge4.data(data);
    this.gauge4.addPointer(3);
    this.gauge4.listen('pointClick', function (e) {
      self.selectedIndex = 4;
      self.router.navigate(['/subsectorreport', self.selectedIndex]);
    });
    this.gauge4.bounds('75%', 0, '25%', '100%');
    this.gauge4.container(stage);
    this.gauge4.draw();
  }

  ShowInfo(): void {
    this.isShowInfo = true;
  }
}
