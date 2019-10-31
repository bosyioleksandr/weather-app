import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WeatherService } from './weather/weather.service';
import { CityWeather } from 'src/app/modules/city-weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-project';
  weather = [];
  city: string;
  cityWeather: Array<CityWeather>;

  constructor(private weatherService: WeatherService) {
    this.resetForm();
  }

  ngOnInit(): void {

  }

  // Stripping the form
  private resetForm(): void {
    this.city = '';
  }

  onSubmit() {
    console.log(this.city);
    this.weatherService.getWeatherForCurrentDay(this.city)
      .subscribe(data => {
        this.weather.unshift(data);
        this.resetForm();
      });
  }
}
