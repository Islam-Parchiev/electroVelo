import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
// export class CreateProductDto {
  
    
//   title:string;
//   description:string;
//   articul:string;
//   price:string;
//   prewPrice:string;
//   sizes:string[];
//   available:boolean;
//   colors:string;
//   images:string[];
//   specifications:string[];
//   brand:string;
// }
// import { Entity,Column,PrimaryGeneratedColumn,OneToMany} from "typeorm";
// import { Image } from "./productImage.entity";
// @Entity()
// export class Product {
//     @PrimaryGeneratedColumn({name:'product_id'})
//     id:number;


//     @Column({nullable:true})
//     title:string;

//     @Column({nullable:true})
//     description:string;

//     @Column({nullable:true})
//     articul:string;

//     @Column({nullable:true})
//     price:string;

//     @Column({name:'prev_price',nullable:true})
//     prewPrice:string;

//     @Column({nullable:true})
//     sizes:string;
   
    
//     @Column({nullable:true})
//     available:boolean;

//     @Column({nullable:true})
//     colors:string;

//     @OneToMany(() => Image, image => image.product, { cascade: true,nullable:true })
//   images: Image[];

//     @Column({nullable:true})
//     specifications:string;

//     @Column({nullable:true})
//     brand:string;

// }
// import { Entity,Column,PrimaryGeneratedColumn, ManyToOne} from "typeorm";
// import { Product } from "./product.entity";
// @Entity()
// export class Image {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   url: string;


//   @ManyToOne(() => Product, product => product.images)
//   product: Product;
// }