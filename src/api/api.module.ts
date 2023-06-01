import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as cntrls from './controllers';
import * as modls from '../@domain';
import * as services from './@infrastructure/Services';
import * as repos from './@infrastructure/Repositories';
import * as jobs from './@infrastructure/jobs';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';


@Module({
    imports: [
        TypeOrmModule.forFeature([
            modls.AirQualityInfoResult
        ]),
        ConfigModule.forRoot(),
        HttpModule,
        ScheduleModule.forRoot()
    ],
    exports: [
        TypeOrmModule,
    ],
    providers: [
        services.AirQualityInfo,
        repos.AirQualityRepository,
        jobs.UpdateAirQualityJob
    ],
    controllers: [
        cntrls.AirQualityController
    ],
})
export class ApiModule { }
