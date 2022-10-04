import { Injectable } from '@nestjs/common';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  private items: Item[] = [
    {
      id: 1,
      name: 'Blue Shirt',
      details: 'For warm feeling',
      price: 20.0,
      quantity: 3,
      status: 'available',
      images: [''],
    },
  ];

  findAll() {
    return this.items;
  }

  findOne(id: string) {
    this.items.find((item) => item.id === +id);
  }

  create(createItemDto: any) {
    return createItemDto;
  }

  update(id: string, updateItemDto: any) {
    const existingItem = this.findOne(id);
  }

  remove(id: string) {
    const findItemIndex = this.items.findIndex((item) => item.id === +id);

    if (findItemIndex >= 0) {
      this.items.splice(findItemIndex, 1);
    }
  }
}
