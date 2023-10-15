import { Test, TestingModule } from '@nestjs/testing';
import { MedicalInfoService } from './medical-info.service';

describe('MedicalInfoService', () => {
  let service: MedicalInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalInfoService],
    }).compile();

    service = module.get<MedicalInfoService>(MedicalInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
