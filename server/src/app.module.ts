import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import {ConfigModule,ConfigService} from '@nestjs/config'
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    UserModule,
    AuthModule,
    ProductModule,
    CartModule,
    FavoritesModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
