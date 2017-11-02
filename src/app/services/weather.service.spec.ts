import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpParams } from '@angular/common/http';
import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { environment } from '../../environments/environment';

const fakeCityName = 'fakeCity';
const defaultUnits = 'metric';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });

    service = getTestBed().get(WeatherService);
    httpMock = getTestBed().get(HttpTestingController);
  });

  describe('getForecastByCityName', () => {
    it('should fetch the endpoint', inject([HttpClient, HttpTestingController], (http: HttpClient, httpMock: HttpTestingController) => {
      service.getForecastByCityName(fakeCityName)
        .subscribe(data => expect(data['name']).toEqual('Test Data'));

      const req = httpMock.expectOne(req => {
        return req.url === environment.apiUrl;
      });
      expect(req.request.params.get('apikey')).toEqual(environment.apiKey);
      expect(req.request.params.get('q')).toEqual(fakeCityName);
      expect(req.request.params.get('units')).toEqual(defaultUnits);
      expect(req.request.method).toEqual('GET');
      req.flush({name: 'Test Data'});
      httpMock.verify();
    }));
  });
});
