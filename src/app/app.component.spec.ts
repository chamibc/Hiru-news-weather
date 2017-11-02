import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { By } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';

const defaultCity: string = 'London, GB';
const cityName: string = 'fake city name';
const unixDate: string = '1509332400';
const formattedDate: string = 'Oct 30';
const formattedTime: string = '03:00 am';
const temperature: number = 12.34;
const temperatureToDisplay: number = 12;
const forecastItem1 = {
  dt: unixDate,
  main: {
    humidity: 1,
    temp: temperature
  },
  weather: [{
    icon: 'iconFileName',
    main: 'icon text'
  }]
}

const forecastServiceResponse = {
  city: {
    name: cityName
  },
  list: [
    forecastItem1
  ]
}

class WeatherServiceMock {
  getForecastByCityName() {}
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let element: HTMLElement;
  let weatherService: WeatherService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: WeatherService,
          useClass: WeatherServiceMock
        }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    element = fixture.debugElement.nativeElement;
    weatherService = fixture.debugElement.injector.get(WeatherService);

    spyOn(weatherService, 'getForecastByCityName').and.returnValue(Observable.of(forecastServiceResponse));
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should fetch the default city: \'London, GB\' with weatherService', async(() => {
    fixture.detectChanges();

    expect(weatherService.getForecastByCityName).toHaveBeenCalledWith(defaultCity);
  }));

  it('should render the city name', async(() => {
    fixture.detectChanges();

    expect(element.textContent).toContain(cityName);
  }));

  it('should fetch items on init', async(() => {
    fixture.detectChanges();

    expect(component.forecast).toEqual(forecastServiceResponse);
  }));

  it('should render forecast items with the right data', async(() => {
    fixture.detectChanges();

    let forecastItemElement = fixture.debugElement.query(By.css('forecast-item'));
    expect(forecastItemElement.properties['time']).toEqual(formattedTime);
    expect(forecastItemElement.properties['date']).toEqual(formattedDate);
    expect(forecastItemElement.properties['humidity']).toEqual(forecastItem1.main.humidity.toString());
    expect(forecastItemElement.properties['image-url']).toEqual(`${environment.iconUrl}/${forecastItem1.weather[0].icon}.png`);
    expect(forecastItemElement.properties['image-text']).toEqual(forecastItem1.weather[0].main);
    expect(forecastItemElement.properties['temperature']).toEqual(temperatureToDisplay.toString());
  }));
});

