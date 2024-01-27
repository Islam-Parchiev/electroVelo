import { Entity,Column,PrimaryGeneratedColumn,JoinColumn, ManyToOne} from "typeorm";
import { Product } from "./product.entity";
@Entity()
export class Color {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    color:string;

    @Column({nullable:true,name:'hex_color'})
    hexColor:string;

    @ManyToOne(()=>Product,(product)=>product.colors,{onDelete:'SET NULL'})
    @JoinColumn({name:'product_id'})
    product:Product;
}