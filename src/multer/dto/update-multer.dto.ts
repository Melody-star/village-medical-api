import { PartialType } from "@nestjs/swagger";
import { CreateMulterDto } from "./create-multer.dto";

export class UpdateMulterDto extends PartialType(CreateMulterDto) {
}
