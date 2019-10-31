import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-project';
  weather = [];

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit(): void {
    this.weatherService.getWeatherForCurrentDay('Lviv')
        .subscribe(data => {
          this.weather.push(data);
        });
  }


}
