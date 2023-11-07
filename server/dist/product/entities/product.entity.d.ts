import { Image } from "./image.entity";
import { Color } from "./color.entity";
import { Spec } from "./spec.entity";
import { Size } from "./size.entity";
export declare class Product {
    id: number;
    title: string;
    description: string;
    articul: string;
    price: string;
    prewPrice: string;
    sizes: Size[];
    available: boolean;
    colors: Color[];
    images: Image[];
    specifications: Spec[];
    brand: string;
}
