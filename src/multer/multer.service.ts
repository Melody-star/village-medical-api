import { Injectable } from "@nestjs/common";
import * as OSS from "ali-oss";
import multerConfig from "../config/multer.config";

@Injectable()
export class MulterService {
  private client: OSS;

  constructor() {
    this.client = new OSS(multerConfig);
  }

  async uploadFile(key: string, file: Buffer): Promise<{}> {
    // try {
    const result = await this.client.put(key, file);
    return {
      url: result.url,
      name: result.name
    };
    // } catch (error) {
    //   throw new Error(`上传失败:${error.message}`);
    // }
  }
}
