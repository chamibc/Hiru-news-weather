import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ForecastItemComponent } from './components/forecastItem/forecastItem.component';

import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    ForecastItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
