import { Test, TestingModule } from '@nestjs/testing';
import { PrimaryDepartmentController } from './primary-department.controller';
import { PrimaryDepartmentService } from './primary-department.service';

describe('PrimaryDepartmentController', () => {
  let controller: PrimaryDepartmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrimaryDepartmentController],
      providers: [PrimaryDepartmentService],
    }).compile();

    controller = module.get<PrimaryDepartmentController>(PrimaryDepartmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
