import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sector-chart',
  templateUrl: './sector-chart.component.html',
  styleUrls: ['./sector-chart.component.css'],
})
export class SectorChartComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  goToBack(): void {
    this.location.back();
  }
}
