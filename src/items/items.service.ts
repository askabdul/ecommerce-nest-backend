import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  //   private items: Item[] = [
  //     {
  //       id: 1,
  //       name: 'Blue Shirt',
  //       details: 'For warm feeling',
  //       price: 20.0,
  //       quantity: 3,
  //       status: 'available',
  //       images: [''],
  //     },
  //   ];

  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  findAll() {
    return this.itemRepository.find();
  }

  async findOne(id: string) {
    const item = await this.itemRepository.findOneBy({ id: +id });
    if (!item) {
      throw new NotFoundException(`Item #${id} not found`);
    }
    return item;
  }

  create(createItemDto: CreateItemDto) {
    const item = this.itemRepository.create(createItemDto);
    return this.itemRepository.save(item);
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    const item = await this.itemRepository.preload({
      id: +id,
      ...updateItemDto,
    });

    if (!item) {
      throw new NotFoundException(`Item #${id} not found`);
    }

    return this.itemRepository.save(item);
  }

  async remove(id: string) {
    const item = await this.findOne(id);

    return this.itemRepository.remove(item);
  }
}
