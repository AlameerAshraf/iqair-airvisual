import { Test } from '@nestjs/testing';
import { AirQualityService } from './air-quality.service';
import { AirQualityRepository } from 'src/api/@infrastructure/Repositories';
import { AirQualityInfoResult } from 'src/@domain/AirQualityInfoResult';

describe('AirQualityService', () => {
  let airQualityService: AirQualityService;
  let airQualityRepository: AirQualityRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        AirQualityService,
        {
          provide: AirQualityRepository,
          useValue: {
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    airQualityService = moduleRef.get<AirQualityService>(AirQualityService);
    airQualityRepository = moduleRef.get<AirQualityRepository>(AirQualityRepository);
  });

  describe('create', () => {
    it('should save air quality info result', async () => {
      const entry: AirQualityInfoResult = {
        id: 1,
        city: 'London',
        aqi: 50,
        modification_time: new Date(),
      };

      const savedEntry: AirQualityInfoResult = {
        ...entry,
        id: 2,
      };

      jest.spyOn(airQualityRepository, 'save').mockResolvedValueOnce(savedEntry);

      const result = await airQualityService.create(entry);

      expect(result).toEqual(savedEntry);
      expect(airQualityRepository.save).toHaveBeenCalledWith({
        ...entry,
        modification_time: expect.any(Date),
      });
    });

    it('should throw an error if saving fails', async () => {
      const entry: AirQualityInfoResult = {
        id: 1,
        city: 'London',
        aqi: 50,
        modification_time: new Date(),
      };

      const error = new Error('Saving failed');

      jest.spyOn(airQualityRepository, 'save').mockRejectedValueOnce(error);

      await expect(airQualityService.create(entry)).rejects.toThrowError(
        `An error occurred while saving data.${error}`,
      );
    });
  });
});