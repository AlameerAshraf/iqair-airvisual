import { Column, Entity, ObjectIdColumn } from "typeorm";


class Pollution {
    ts: string;
    aqius: number;
    mainus: string;
    aqicn: number;
    maincn: string;
};


@Entity()
export class AirQualityInfoResult {
    @ObjectIdColumn()
    id: Object

    @Column((type) => Pollution)
    Result: Pollution;

    @Column({type: 'timestamp'})
    modification_time: Date;
};

