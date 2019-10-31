export interface CityWeather {
    current: Current;
    location: Location;
    request: Request;
}

interface Current {
    cloudcover: number;
    feelslike: number;
    humidity: number;
    is_day: string;
    observation_time: string;
    precip: number;
    pressure: number;
    temperature: number;
    uv_index: number;
    visibility: number;
    weather_code: number;
    weather_descriptions: string[];
    weather_icons: string[];
    wind_degree: number;
    wind_dir: string;
    wind_speed: number;
}

interface Location {
    country: string;
    lat: string;
    localtime: string;
    localtime_epoch: number;
    lon: string;
    name: string;
    region: string;
    timezone_id: string;
    utc_offset: string;
}

interface Request {
    language: string;
    query: string;
    type: string;
    unit: string;
}