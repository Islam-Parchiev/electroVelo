import { Product } from 'src/product/entities/product.entity';
import { Cart } from './cart.entity';




export class CartItem {

  id: number;


  cart: Cart;


  product: Product;


  quantity: number;
}

