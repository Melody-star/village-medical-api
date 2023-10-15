import { Test, TestingModule } from '@nestjs/testing';
import { HelpCenterService } from './help-center.service';

describe('HelpCenterService', () => {
  let service: HelpCenterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelpCenterService],
    }).compile();

    service = module.get<HelpCenterService>(HelpCenterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
