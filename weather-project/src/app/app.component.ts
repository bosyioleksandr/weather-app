import { Component } from '@angular/core';

import { WeatherService } from './weather/weather.service';
import { CityWeather } from 'src/app/models/city-weather';
import { StorageService } from 'src/app/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'weather-project';
  weather: CityWeather[] = [];
  city: string;

  constructor(private weatherService: WeatherService,
    private storage: StorageService) { }

  private resetForm(): void {
    this.city = '';
  }


  onSubmit(): void {
    if (this.storage.checkStoreData(this.city)) {
      this.weather.unshift(this.storage.getData(this.city) as CityWeather);
    } else {
      this.weatherService.getWeatherForCurrentDay(this.city)
        .subscribe(data => {
          this.storage.storeData(this.city, data as CityWeather);
          this.weather.unshift(data as CityWeather);
          this.resetForm();
        });
    }
  }

}
