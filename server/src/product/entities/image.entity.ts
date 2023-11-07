import { Entity,Column,PrimaryGeneratedColumn,OneToMany,JoinColumn, ManyToOne} from "typeorm";
import { Product } from "./product.entity";
@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:'src_path',nullable:true})
    srcPath:string;

    @ManyToOne(()=>Product,(product)=>product.images,{onDelete:'SET NULL'})
    @JoinColumn({name:'product_id'})
    product:Product;
}