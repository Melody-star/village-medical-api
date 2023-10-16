import { Injectable } from "@nestjs/common";
import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Tag } from "./entities/tag.entity";
import { Repository } from "typeorm";

@Injectable()
export class TagService {

  constructor(
    @InjectRepository(Tag)
    private readonly tag: Repository<Tag>
  ) {
  }

  create(createTagDto: CreateTagDto) {
    return "This action adds a new tag";
  }

  findAll() {
    return `This action returns all tag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
