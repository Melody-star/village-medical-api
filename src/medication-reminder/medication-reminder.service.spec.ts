import { Test, TestingModule } from '@nestjs/testing';
import { MedicationReminderService } from './medication-reminder.service';

describe('MedicationReminderService', () => {
  let service: MedicationReminderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicationReminderService],
    }).compile();

    service = module.get<MedicationReminderService>(MedicationReminderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
