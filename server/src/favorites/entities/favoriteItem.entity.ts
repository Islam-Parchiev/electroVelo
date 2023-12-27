import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Favorite } from './favorite.entity';
// import { Cart } from './cart.entity';

@Entity()
export class FavoriteItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Favorite, fav => fav.items)
  favorite: Favorite;


  @ManyToOne(() => Product, product => product.cartItems,{nullable:true})
  product: Product;

}