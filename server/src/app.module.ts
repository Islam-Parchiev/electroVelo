import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import {ConfigModule,ConfigService} from '@nestjs/config'
import { OrdersModule } from './orders/orders.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(configService:ConfigService)=>({
      type: 'postgres',
      host:configService.get('DB_HOST'),
          port:configService.get('DB_PORT'),
          username:configService.get('DB_USERNAME'),
          password:configService.get('DB_PASSWORD'),
          database:configService.get('DB_NAME'),
      entities:[__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    inject:[ConfigService],
  }),
    UserModule,
    AuthModule,
    OrdersModule,
    ProductModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
