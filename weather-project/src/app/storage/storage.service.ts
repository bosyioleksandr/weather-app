import { Injectable } from '@angular/core';

import { CityWeather } from '../models/city-weather';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  storeData(key: string, data: CityWeather): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  checkStoreData(key: string): boolean {
    if (localStorage.getItem(key)) {
      return true;
    }
    return false;
  }

  getData(key: string): CityWeather {
    return JSON.parse(localStorage.getItem(key));
  }

}
