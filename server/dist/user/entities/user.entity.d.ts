import { Cart } from 'src/cart/entities/cart.entity';
export declare class User {
    id: number;
    name: string;
    surname: string;
    showname: string;
    email: string;
    phoneNumber: string;
    city: string;
    street: string;
    house: number;
    floor: number;
    flatNumber: number;
    password: string;
    carts: Cart;
}
