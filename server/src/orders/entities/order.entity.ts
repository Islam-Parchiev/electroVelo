import { Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,JoinColumn, ManyToOne} from "typeorm";
import { User } from "src/user/entities/user.entity";
@Entity()
export class Order {
    @PrimaryGeneratedColumn({name:'order_id'})
    id:number;

    @ManyToOne(()=>User,(user)=>user.id)
    @JoinColumn({name:'user_id'})
    userId:User;

    @Column({nullable:true})
    title:string;

    @CreateDateColumn()
    date:Date;

    @Column()
    price:number;

    @Column()
    status:boolean;

    @Column()
    orderNumber:number;


}
