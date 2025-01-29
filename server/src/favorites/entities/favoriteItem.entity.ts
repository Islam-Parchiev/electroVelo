
import { Product } from 'src/product/entities/product.entity';
import { Favorite } from './favorite.entity';
// import { Cart } from './cart.entity';


export class FavoriteItem {

  id: number;


  favorite: Favorite;



  product: Product;

}