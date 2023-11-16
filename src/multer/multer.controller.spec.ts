import { Test, TestingModule } from "@nestjs/testing";
import { MulterController } from "./multer.controller";
import { MulterService } from "./multer.service";

describe("MulterController", () => {
  let controller: MulterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MulterController],
      providers: [MulterService]
    }).compile();

    controller = module.get<MulterController>(MulterController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
