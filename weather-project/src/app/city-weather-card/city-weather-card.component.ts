import { Component, Input } from '@angular/core';

import { CityWeather } from '../models/city-weather';

@Component({
  selector: 'app-city-weather-card',
  templateUrl: './city-weather-card.component.html'
})

export class CityWeatherCardComponent {
  @Input() data: CityWeather;
}
