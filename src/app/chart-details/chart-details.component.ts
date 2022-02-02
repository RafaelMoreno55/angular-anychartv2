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
  id: number;
  detailsChart: anychart.charts.Cartesian = null;
  detailsBarChart: anychart.charts.Cartesian = null;
  detailsSunburstChart: anychart.charts.Sunburst = null;
  @ViewChild('chartDetailsContainer') chartDetailsContainer;
  datosDetalle = [
    {
      x: 0,
      name: '2001',
      value: 10048,
      qtrBreakdown: [
        ['Q1', 4761],
        ['Q2', 3530],
        ['Q3', 2890],
        ['Q4', 1133],
      ],
    },
    {
      x: 1,
      name: '2002',
      value: 10938,
      qtrBreakdown: [
        ['Q1', 3686],
        ['Q2', 1580],
        ['Q3', 3790],
        ['Q4', 1882],
      ],
    },
    {
      x: 2,
      name: '2003',
      value: 9989,
      qtrBreakdown: [
        {
          name: 'Ventas de temporada',
          id: 'ventas',
          parent: null,
          value: 9989,
        },
        { name: 'Invierno', parent: 'ventas', id: 'invierno', value: 1500 },
        { name: 'Primavera', parent: 'ventas', id: 'primavera', value: 2500 },
        { name: 'Verano', parent: 'ventas', id: 'verano', value: 3989 },
        { name: 'Otoño', parent: 'ventas', id: 'otoño', value: 2000 },
        { name: 'Sombrero', parent: 'verano', id: 'sombrero', value: 800 },
        { name: 'Gafas de sol', parent: 'verano', id: 'gafassol', value: 200 },
        { name: 'Short', parent: 'verano', id: 'short', value: 1989 },
        { name: 'Playera', parent: 'verano', id: 'playera', value: 1000 },
        { name: 'Gorra', parent: 'primavera', id: 'gorra', value: 1500 },
        { name: 'Sandalia', parent: 'primavera', id: 'sandalia', value: 1000 },
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
        this.pintarGraficaBarra();
      } else {
        if (this.id == 2) {
          this.pintarGraficaSunburst();
        }
      }
    }
  }

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
    this.detailsChart.title('Detalles de ventas');
    this.detailsChart.legend(true);
    this.detailsChart.tooltip().titleFormat('Datos');
    this.detailsChart.bounds('0', '0', '50%', '100%');
    this.detailsChart.container(this.chartDetailsContainer.nativeElement);
    this.detailsChart.draw();
  }

  pintarGraficaBarra() {
    // create an instance of a column chart
    this.detailsBarChart = anychart.column();
    // clear the chart with details
    this.detailsBarChart.removeAllSeries();
    // points = e.points
    this.datosDetalle.forEach((element) => {
      if (element['x'] == this.id) {
        this.detailsBarChart
          .column(element['qtrBreakdown'])
          .name(element['name']);
      }
    });
    this.detailsBarChart.title('Detalles de ventas');
    this.detailsBarChart.legend(true);
    this.detailsBarChart.tooltip().titleFormat('Datos');
    this.detailsBarChart.bounds('0', '0', '50%', '100%');
    this.detailsBarChart.container(this.chartDetailsContainer.nativeElement);
    this.detailsBarChart.draw();
  }

  pintarGraficaSunburst() {
    // create an instance of a sunburst chart
    this.detailsSunburstChart = anychart.sunburst();
    // points = e.points
    this.datosDetalle.forEach((element) => {
      if (element['x'] == this.id) {
        this.detailsSunburstChart.data(element['qtrBreakdown'], 'as-table');
      }
    });
    this.detailsSunburstChart.title('Detalles de ventas');
    this.detailsSunburstChart.legend(true);
    this.detailsSunburstChart.tooltip().titleFormat('Datos');
    this.detailsSunburstChart.bounds('0', '0', '50%', '100%');
    this.detailsSunburstChart.container(
      this.chartDetailsContainer.nativeElement
    );
    this.detailsSunburstChart.draw();
  }

  irHaciaAtras() {
    this.location.back();
  }
}
