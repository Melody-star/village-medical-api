import { Test, TestingModule } from '@nestjs/testing';
import { HealthRecordController } from './health-record.controller';
import { HealthRecordService } from './health-record.service';

describe('HealthRecordController', () => {
  let controller: HealthRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthRecordController],
      providers: [HealthRecordService],
    }).compile();

    controller = module.get<HealthRecordController>(HealthRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
