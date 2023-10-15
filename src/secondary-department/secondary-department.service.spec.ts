import { Test, TestingModule } from '@nestjs/testing';
import { SecondaryDepartmentService } from './secondary-department.service';

describe('SecondaryDepartmentService', () => {
  let service: SecondaryDepartmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecondaryDepartmentService],
    }).compile();

    service = module.get<SecondaryDepartmentService>(SecondaryDepartmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
