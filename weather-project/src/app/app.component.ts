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
  city: string;

  constructor(private weatherService: WeatherService) {
    this.resetForm();
  }

  ngOnInit(): void {
    this.weatherService.getWeatherForCurrentDay('Lviv')
      .subscribe(data => {
        this.weather.push(data);
      });
  }

  // Stripping the form
  private resetForm(): void {
    this.city = '';
  }


}
