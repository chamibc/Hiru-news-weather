import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { environment } from '../environments/environment';
import * as moment from 'moment';

const defaultCity: string = 'London, GB';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  forecast: any;
  iconUrl: string = environment.iconUrl;

  constructor(
    private weatherService: WeatherService
  ) {
  }

  ngOnInit() {
    this.weatherService.getForecastByCityName(defaultCity)
      .subscribe(
        forecast => {
          this.forecast = forecast;
        },
        this.handleFetchError
      );
  }

  formatDate(unixTimestamp) {
    return moment.unix(unixTimestamp).format('MMM D');
  }

  formatTime(unixTimestamp) {
    return moment.unix(unixTimestamp).format('hh:mm a');
  }

  formatTemperature(temperature) {
    return Math.round(temperature);
  }

  handleFetchError() {
    // TODO: handle error
    console.log('Some error occurred');
  }
}
