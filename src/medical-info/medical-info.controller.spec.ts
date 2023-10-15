import { Test, TestingModule } from '@nestjs/testing';
import { MedicalInfoController } from './medical-info.controller';
import { MedicalInfoService } from './medical-info.service';

describe('MedicalInfoController', () => {
  let controller: MedicalInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalInfoController],
      providers: [MedicalInfoService],
    }).compile();

    controller = module.get<MedicalInfoController>(MedicalInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
