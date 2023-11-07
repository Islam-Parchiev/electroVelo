import { Entity,Column,PrimaryGeneratedColumn,JoinColumn, ManyToOne} from "typeorm";
import { Product } from "./product.entity";
@Entity()
export class Size {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    size:string;

    @ManyToOne(()=>Product,(product)=>product.sizes,{onDelete:'SET NULL'})
    @JoinColumn({name:'product_id'})
    product:Product;
}