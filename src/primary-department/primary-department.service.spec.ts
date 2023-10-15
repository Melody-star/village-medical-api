import { Test, TestingModule } from '@nestjs/testing';
import { PrimaryDepartmentService } from './primary-department.service';

describe('PrimaryDepartmentService', () => {
  let service: PrimaryDepartmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrimaryDepartmentService],
    }).compile();

    service = module.get<PrimaryDepartmentService>(PrimaryDepartmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
