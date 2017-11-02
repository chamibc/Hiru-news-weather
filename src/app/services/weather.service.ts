import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const defaultUnits = 'metric';

@Injectable()
export class WeatherService {
  constructor(
    private http: HttpClient
  ) { }

  getForecastByCityName(city: string): Observable<any> {
    let parameters: HttpParams = new HttpParams()
      .append('apikey', environment.apiKey)
      .append('q', city)
      .append('units', defaultUnits);

    return this.http
      .get(environment.apiUrl, {
        params: parameters
      }).map (response => {
        return response;
      });
  }
}
