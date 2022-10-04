import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Cart } from '../dto/create-cart.dto';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column('json', { nullable: true })
  carts: Cart[];
}
