import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'anychart';

@Component({
  selector: 'app-chart-details',
  templateUrl: './chart-details.component.html',
  styleUrls: ['./chart-details.component.css'],
})
export class ChartDetailsComponent implements OnInit {
  //@Input() id: number;
  id: number;
  detailsChart: anychart.charts.Cartesian = null;
  @ViewChild('chartDetailsContainer') chartDetailsContainer;
  datosDetalle = [
    {
      x: 0,
      name: 'Name1',
      value: 10048,
      qtrBreakdown: [
        ['Q1', 761],
        ['Q2', 530],
        ['Q3', 890],
        ['Q4', 679],
      ],
    },
    {
      x: 1,
      name: 'Name2',
      value: 10938,
      qtrBreakdown: [
        ['Q1', 686],
        ['Q2', 580],
        ['Q3', 790],
        ['Q4', 897],
      ],
    },
    {
      x: 2,
      name: 'Name3',
      value: 9989,
      qtrBreakdown: [
        ['Q1', 832],
        ['Q2', 740],
        ['Q3', 912],
        ['Q4', 850],
      ],
    },
  ];

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    // Do not use the absolute path of the svg definitions.
    anychart.graphics.useAbsoluteReferences(false);
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id == 0) {
      this.pintarGraficaLinea();
    } else {
      if (this.id == 1) {
        this.pintarGraficaLinea();
      } else {
        if (this.id == 2) {
          this.pintarGraficaLinea();
        }
      }
    }
  }

  /* ngAfterViewInit() {
    this.detailsChart.container(this.chartDetailsContainer.nativeElement);
    this.detailsChart.draw();
  } */

  /* obtenerDatos() {
    // clear the chart with details
    this.detailsChart.removeAllSeries();
    // points = e.points
    this.id = +this.route.snapshot.paramMap.get('id');
    this.datosDetalle.forEach((element) => {
      if (element['x'] == this.id) {
        this.detailsChart.line(element['qtrBreakdown']).name(element['name']);
      }
    });
  } */

  pintarGraficaLinea() {
    // create an instance of a line chart
    this.detailsChart = anychart.line();
    // clear the chart with details
    this.detailsChart.removeAllSeries();
    // points = e.points
    this.datosDetalle.forEach((element) => {
      if (element['x'] == this.id) {
        this.detailsChart.line(element['qtrBreakdown']).name(element['name']);
      }
    });
    this.detailsChart.title('Gráfica con detalles');
    this.detailsChart.legend(true);
    this.detailsChart.tooltip().titleFormat('Datos');
    this.detailsChart.bounds('0', '0', '50%', '100%');
    this.detailsChart.container(this.chartDetailsContainer.nativeElement);
    this.detailsChart.draw();
  }

  irHaciaAtras() {
    this.location.back();
  }
}
