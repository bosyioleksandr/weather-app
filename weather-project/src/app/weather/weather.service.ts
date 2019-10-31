import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = 'http://api.weatherstack.com/';
  private accessKey = 'f5ffb450a6b4b0d32421170963c1806e';
  private currentDay = 'current';

  constructor(private http: HttpClient) {}

    getWeatherForCurrentDay(location) {
      return this.http.get(
        `${this.baseUrl}${this.currentDay}?access_key=${this.accessKey}&query=${location}`
        );
    }

}
