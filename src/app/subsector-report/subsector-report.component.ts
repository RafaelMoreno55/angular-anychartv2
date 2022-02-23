import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-subsector-report',
  templateUrl: './subsector-report.component.html',
  styleUrls: ['./subsector-report.component.css'],
})
export class SubsectorReportComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  goToBack(): void {
    this.location.back();
  }
}
