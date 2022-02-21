import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataPickerComponent } from './data-picker/data-picker.component';
import { DemoDataProviderService } from './demo-data-provider.service';
import { ChartComponent } from './chart/chart.component';
import { ChartDetailsComponent } from './chart-details/chart-details.component';
import { AppRoutingModule } from './app-routing.module';
import { SectorChartComponent } from './sector-chart/sector-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DataPickerComponent,
    ChartComponent,
    ChartDetailsComponent,
    SectorChartComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [DemoDataProviderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
