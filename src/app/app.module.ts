import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SimulatorComponent } from './components/simulator/simulator.component';
import { UpdateComponent } from './components/update/update.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ExchangeRateServiceService} from "./service/exchange-rate-service.service";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SimulatorComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ExchangeRateServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
