export class GetAirQualityDTO {
    status: string;
    data: AirQualityData;
};


class AirQualityData {
    city: string;
    state: string;
    country: string;
    location: Location;
    current: CurrentResult;
};

class Location {
    type: string;
    coordinates: [number, number];
};

class CurrentResult {
    pollution: Pollution;
    weather: Weather
};

class Pollution {
    ts: string;
    aqius: number;
    mainus: string;
    aqicn: number;
    maincn: string;
};

class Weather {
    ts: string;
    tp: number;
    pr: number;
    hu: number;
    ws: number;
    wd: number;
    ic: string;
};