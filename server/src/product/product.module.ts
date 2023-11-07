import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Image } from './entities/image.entity';
import { Size } from './entities/size.entity';
import { Spec } from './entities/spec.entity';
import { Color } from './entities/color.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Product,Image,Size,Spec,Color ])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
