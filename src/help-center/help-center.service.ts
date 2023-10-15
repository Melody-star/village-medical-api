import { Injectable } from '@nestjs/common';
import { CreateHelpCenterDto } from './dto/create-help-center.dto';
import { UpdateHelpCenterDto } from './dto/update-help-center.dto';

@Injectable()
export class HelpCenterService {
  create(createHelpCenterDto: CreateHelpCenterDto) {
    return 'This action adds a new helpCenter';
  }

  findAll() {
    return `This action returns all helpCenter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} helpCenter`;
  }

  update(id: number, updateHelpCenterDto: UpdateHelpCenterDto) {
    return `This action updates a #${id} helpCenter`;
  }

  remove(id: number) {
    return `This action removes a #${id} helpCenter`;
  }
}
