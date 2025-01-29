import { User } from 'src/user/entities/user.entity';
import { CartItem } from './cartItem.entity';


export class Cart {

  id: number;

  user: User;

  items: CartItem[];
}