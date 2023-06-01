import { AirQualityInfoResult } from "src/@domain";

export interface IAirQualityRepository {
    create(entry: AirQualityInfoResult): Promise<AirQualityInfoResult>;
}