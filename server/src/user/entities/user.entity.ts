import { Cart } from 'src/cart/entities/cart.entity';
import { Favorite } from 'src/favorites/entities/favorite.entity';


export class User {
  id: number;

  name: string;
  surname:string;  
  showname:string;

  email: string;
  phoneNumber:string;
  city:string;
  street:string;
  house:number;
  floor:number;

  flatNumber:number;

  password:string;


  carts:Cart;

  favorites:Favorite;

}