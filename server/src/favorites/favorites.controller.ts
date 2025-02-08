import { Controller, Get, Post, Body, UseGuards,Request } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post('add')
  @UseGuards(JwtAuthGuard)
  addToFavorites(@Request() req,@Body("productId") product:number) {
    return this.favoritesService.addToFavorites(+req.user.id,+product);
  }

  @Get('find')
  @UseGuards(JwtAuthGuard)
  findAll(@Request() req) {
    return this.favoritesService.findAll(+req.user.id);
  }
}
