import { Image } from "./image.entity";
import { Color } from "./color.entity";
import { Spec } from "./spec.entity";
import { Size } from "./size.entity";
import { CartItem } from "src/cart/entities/cartItem.entity";
export declare class Product {
    id: number;
    title: string;
    description: string;
    articul: string;
    price: number;
    prevPrice: number;
    sizes: Size[];
    available: boolean;
    colors: Color[];
    images: Image[];
    previewImage: string;
    specifications: Spec[];
    brand: string;
    country: string;
    category: string;
    material: string;
    cartItems: CartItem;
}
