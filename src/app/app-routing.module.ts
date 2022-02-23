import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartDetailsComponent } from './chart-details/chart-details.component';
import { ChartComponent } from './chart/chart.component';
import { SectorChartComponent } from './sector-chart/sector-chart.component';
import { SectorReportComponent } from './sector-report/sector-report.component';
import { SubsectorReportComponent } from './subsector-report/subsector-report.component';
import { VariableReportComponent } from './variable-report/variable-report.component';

const routes: Routes = [
  { path: '', redirectTo: '/sectorreport', pathMatch: 'full' },
  { path: 'sectorreport', component: SectorReportComponent },
  { path: 'subsectorreport', component: SubsectorReportComponent },
  { path: 'variablereport', component: VariableReportComponent },
  { path: 'charts', component: ChartComponent },
  { path: 'details/:id', component: ChartDetailsComponent },
  { path: 'sectorcharts/:id', component: SectorChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
