// import { Order } from 'src/orders/entities/order.entity';
import { Entity, Column, PrimaryGeneratedColumn,OneToMany, JoinColumn} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({nullable:true})
  surname:string;  

  @Column({nullable:true})
  showname:string;

  @Column()
  email: string;

  @Column({name:'phone_number',nullable:true})
  phoneNumber:string;

  @Column({nullable:true})
  city:string;

  @Column({nullable:true})
  street:string;

  @Column({nullable:true})
  house:number;

  @Column({nullable:true})
  floor:number;

  @Column({name:'flat_number',nullable:true})
  flatNumber:number;

  @Column()
  password:string;
}