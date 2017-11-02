import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ForecastItemComponent } from './forecastItem.component';
import { By } from '@angular/platform-browser';

const fakeDate = 'fakeDate';
const fakeTime = 'fakeTime';
const fakeImageUrl:string = 'fake image url';
const fakeImageText:string = 'fake image text';
const fakeHumidity:number = 1;
const fakeTemperature:number = 2;

describe('ForecastItemComponent', () => {
  let component: ForecastItemComponent;
  let fixture: ComponentFixture<ForecastItemComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ForecastItemComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ForecastItemComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;
  }));

  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should render time', async(() => {
    component.time = fakeTime;

    fixture.detectChanges();

    expect(element.textContent).toContain(fakeTime);
  }));

  it('should render date', async(() => {
    component.date = fakeDate;

    fixture.detectChanges();

    expect(element.textContent).toContain(fakeDate);
  }));

  it('should render image', async(() => {
    component.imageUrl = fakeImageUrl;
    component.imageText = fakeImageText;

    fixture.detectChanges();

    let imageElement = fixture.debugElement.query(By.css('img'));
    expect(imageElement.properties['src']).toEqual(fakeImageUrl);
    expect(imageElement.properties['alt']).toEqual(fakeImageText);
    expect(imageElement.properties['title']).toEqual(fakeImageText);
  }));

  it('should render humidity', async(() => {
    component.humidity = fakeHumidity;

    fixture.detectChanges();

    expect(element.textContent).toContain(fakeHumidity.toString());
  }));

  it('should render temperature', async(() => {
    component.temperature = fakeTemperature

    fixture.detectChanges();

    expect(element.textContent).toContain(fakeTemperature.toString());
  }));
});
