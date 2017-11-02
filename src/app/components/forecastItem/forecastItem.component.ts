import { Component, Input } from '@angular/core';

@Component({
  selector: 'forecast-item',
  templateUrl: './forecastItem.component.html',
  styleUrls: ['./forecastItem.component.css']
})

export class ForecastItemComponent {
  @Input() time: string;
  @Input() date: string;
  @Input() humidity: number;
  @Input() temperature: number;
  @Input('image-url') imageUrl: string;
  @Input('image-text') imageText: string;
}
