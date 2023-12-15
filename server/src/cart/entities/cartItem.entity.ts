import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Cart } from './cart.entity';

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cart, cart => cart.items)
  cart: Cart;

  @ManyToOne(() => Product, product => product.cartItems,{nullable:true})
  product: Product;

  @Column()
  quantity: number;
}