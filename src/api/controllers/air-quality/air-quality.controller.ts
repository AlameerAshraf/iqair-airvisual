import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AirQualityInfo } from 'src/api/@infrastructure';
import { AirQualityRepository } from 'src/api/@infrastructure/Repositories';

@ApiTags('AirQualityController')
@Controller({
    path: 'air-quality',
    version: '1'
})
export class AirQualityController {

    constructor(private readonly IqairServcie: AirQualityInfo,
        private readonly IqairRepository: AirQualityRepository){

    }


    @Get(':lat/:lon')
    async GetAirQuality(@Param('lon') latitude: string, @Param('lat') longitude: string) {
        var iqairResult = await this.IqairServcie.GetAirQualityInfoByLocationInfo(longitude, latitude);
        return await this.IqairRepository.create(iqairResult);
    };
}
