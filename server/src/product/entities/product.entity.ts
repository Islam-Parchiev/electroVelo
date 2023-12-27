import { Entity,Column,PrimaryGeneratedColumn,OneToMany} from "typeorm";
import { Image } from "./image.entity";
import {Color} from "./color.entity";
import { Spec } from "./spec.entity";
import { Size } from "./size.entity";
import { CartItem } from "src/cart/entities/cartItem.entity";
import { FavoriteItem } from "src/favorites/entities/favoriteItem.entity";
@Entity()
export class Product {
    @PrimaryGeneratedColumn({name:'product_id'})
    id:number;


    @Column({nullable:true})
    title:string;

    @Column({nullable:true})
    description:string;

    @Column({nullable:true})
    articul:string;

    @Column({nullable:true})
    price:number;

    @Column({name:'prev_price',nullable:true})
    prevPrice:number;

    @OneToMany(() => Size, size => size.product, {nullable:true })
    sizes:Size[];
   
    
    @Column({nullable:true})
    available:boolean;

    @OneToMany(() => Color, color => color.product, {nullable:true })
    colors:Color[];

    @OneToMany(() => Image, image => image.product, {nullable:true })
  images: Image[];
   @Column({nullable:true })
   previewImage:string;
  @OneToMany(() => Spec, spec => spec.product, {nullable:true })
    specifications:Spec[];

    @Column({nullable:true})
    brand:string;

    @Column({nullable:true})
    country:string;
    
    @Column({nullable:true})
    category:string;
    @Column({nullable:true})
    material:string;

    @OneToMany(() => CartItem, item => item.product, {nullable:true })
    cartItems:CartItem;
    
    @OneToMany(() => FavoriteItem, item => item.product, {nullable:true })
    favoriteItems:FavoriteItem;
}

