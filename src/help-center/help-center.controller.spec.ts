import { Test, TestingModule } from '@nestjs/testing';
import { HelpCenterController } from './help-center.controller';
import { HelpCenterService } from './help-center.service';

describe('HelpCenterController', () => {
  let controller: HelpCenterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelpCenterController],
      providers: [HelpCenterService],
    }).compile();

    controller = module.get<HelpCenterController>(HelpCenterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
