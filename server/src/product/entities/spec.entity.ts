import { Entity,Column,PrimaryGeneratedColumn,JoinColumn, ManyToOne} from "typeorm";
import { Product } from "./product.entity";
@Entity()
export class Spec {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    year:number;

    @Column()
    country:string;

    @Column()
    material:string;

    @Column()
    brand:string;

    @Column()
    category:string;
    

    @ManyToOne(()=>Product,(product)=>product.specifications,{onDelete:'SET NULL'})
    @JoinColumn({name:'product_id'})
    product:Product;
}