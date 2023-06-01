import { AirQualityInfoResult } from "src/@domain";
import { IAirQualityRepository } from "../../Interfaces";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AirQualityRepository implements IAirQualityRepository {

    constructor(
        @InjectRepository(AirQualityInfoResult)
        private readonly airQualityRepo: Repository<AirQualityInfoResult>
    ){}


    async create(entry: AirQualityInfoResult): Promise<AirQualityInfoResult> {
        try{
            entry.modification_time = new Date();
            return await this.airQualityRepo.save(entry);
        }
        catch(error) {
            throw new Error(`An error occurred while saving data.${error}`);
        }
    };
};