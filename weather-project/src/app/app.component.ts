import { Component } from '@angular/core';

import { WeatherService } from './weather/weather.service';
import { CityWeather } from 'src/app/models/city-weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'weather-project';
  weather: CityWeather[] = [];
  city: string;

  constructor(private weatherService: WeatherService) {}

  private resetForm(): void {
    this.city = '';
  }

  onSubmit(): void {
    this.weatherService.getWeatherForCurrentDay(this.city)
      .subscribe(data => {
        this.weather.unshift(data as CityWeather);
        this.resetForm();
      });
  }
}
