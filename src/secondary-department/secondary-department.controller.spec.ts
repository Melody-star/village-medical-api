import { Test, TestingModule } from '@nestjs/testing';
import { SecondaryDepartmentController } from './secondary-department.controller';
import { SecondaryDepartmentService } from './secondary-department.service';

describe('SecondaryDepartmentController', () => {
  let controller: SecondaryDepartmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecondaryDepartmentController],
      providers: [SecondaryDepartmentService],
    }).compile();

    controller = module.get<SecondaryDepartmentController>(SecondaryDepartmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
