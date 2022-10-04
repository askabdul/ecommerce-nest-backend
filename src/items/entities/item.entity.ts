import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  details: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  status: string;

  @Column('simple-array', { nullable: true })
  images: string[];
}
