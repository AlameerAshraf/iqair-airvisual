import { Cron, CronExpression } from "@nestjs/schedule";
import { AirQualityInfo } from "../../Services";
import { AirQualityRepository } from "../../Repositories";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UpdateAirQualityJob {

    constructor(private readonly IqairServcie: AirQualityInfo,
        private readonly IqairRepository: AirQualityRepository){}

    @Cron(CronExpression.EVERY_MINUTE) 
    async updateAirQualityInfo() {
        console.log("CHECKING AIR QUALITY FOR PARIS!");
        
        var latitude = '48.856613';
        var longitude = '2.352222';

        var iqairResult = await this.IqairServcie.GetAirQualityInfoByLocationInfo(longitude, latitude);
        await this.IqairRepository.create(iqairResult);
    }
}