import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  details: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column('json', { nullable: true })
  images: string[];

  @ManyToOne(() => User, (user) => user.carts)
  user: User;
}
