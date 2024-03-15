import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile, Query
} from "@nestjs/common";
import { MulterService } from "./multer.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiProperty, ApiTags } from "@nestjs/swagger";
import { Public } from "../public/public.decorator";
import { UserService } from "../user/user.service";
import { UpdateUserDto } from "../user/dto/update-user.dto";

@ApiTags("文件上传")
@Controller("multer")
export class MulterController {
  constructor(private readonly multerService: MulterService, private readonly userService: UserService) {
  }

  @Public()
  @Post("upload")
  @ApiOperation({ summary: "上传文件" })
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {

    let key = ""
    if (file.originalname == undefined){
       key = `uploads/9082374`;
    }else {
       key = `uploads/${file.originalname}`;
    }
    const result = await this.multerService.uploadFile(key, file.buffer);
    return result;
  }
}
