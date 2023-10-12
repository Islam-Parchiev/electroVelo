import { Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,JoinColumn, ManyToOne} from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn({name:'product_id'})
    id:number;


    @Column()
    title:string;

    @Column()
    description:string;

    @Column()
    articul:string;

    @Column()
    price:string;

    @Column({name:'prev_price'})
    prewPrice:string;

    @Column()
    sizes:string;


    @Column({nullable:true})
    available:boolean;

    @Column()
    colors:string;

    @Column()
    images:string;

    @Column()
    specifications:string;

    @Column()
    brand:string;

}

// import { Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,JoinColumn, ManyToOne} from "typeorm";
// import { User } from "src/user/entities/user.entity";
// @Entity()
// export class Order {
//     @PrimaryGeneratedColumn({name:'order_id'})
//     id:number;

//     @ManyToOne(()=>User,(user)=>user.id)
//     @JoinColumn({name:'user_id'})
//     userId:User;

//     @Column({nullable:true})
//     title:string;

//     @CreateDateColumn()
//     date:Date;

//     @Column()
//     price:number;

//     @Column()
//     status:boolean;

//     @Column()
//     orderNumber:number;


// }
