import { AirQualityInfoResult } from "src/@domain";

export interface IAirQualityInfo {
    GetAirQualityInfoByLocationInfo(longitude: string, latitude: string) : Promise<AirQualityInfoResult>
}