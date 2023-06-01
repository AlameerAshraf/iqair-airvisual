import { AirQualityInfoResult } from "src/@domain";
import { IAirQualityInfo } from "../../Interfaces/IAirQualityInfo/IAirQualityInfo";
import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
import { firstValueFrom, map } from "rxjs";
import { GetAirQualityDTO } from "../../DTOs";


@Injectable()
export class AirQualityInfo implements IAirQualityInfo {
    constructor(private readonly httpService: HttpService) {

    }



    async GetAirQualityInfoByLocationInfo(longitude: string, latitude: string): Promise<AirQualityInfoResult> {
        try {
            var baseUrl = process.env.IQAIR_URL || `https://api.airvisual.com/v2/nearest_city?`;
            var requestUrl = `${baseUrl}lat=${latitude}&lon=${longitude}&key=${process.env.IQAIR_API_KEY}`;
    
            var result = await this.httpService.get(requestUrl).pipe(
                map(response => response.data)
            );
    
            var airResult = await firstValueFrom(result) as GetAirQualityDTO;
    
            var res = new AirQualityInfoResult();
            res.Result = airResult.data.current.pollution;
    
            return res;
        }
        catch(error) {
            throw new Error(`An error occurred while retrieving data.${error}`);
        }
    };
}