import { Test, TestingModule } from '@nestjs/testing';
import { HealthRecordService } from './health-record.service';

describe('HealthRecordService', () => {
  let service: HealthRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthRecordService],
    }).compile();

    service = module.get<HealthRecordService>(HealthRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
