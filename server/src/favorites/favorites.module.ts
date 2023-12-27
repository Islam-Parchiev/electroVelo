import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favorite } from './entities/favorite.entity';
import { FavoriteItem } from './entities/favoriteItem.entity';
import { Product } from 'src/product/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Favorite,FavoriteItem ,Product])],
  controllers: [FavoritesController],
  providers: [FavoritesService]
})
export class FavoritesModule {}
