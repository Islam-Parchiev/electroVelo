import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { CartService } from './cart.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Req() req,@Body("productId") productId:number|string,@Body("quantity") quantity:number|string) {
    return this.cartService.addToCart(+req.user.id,+productId,+quantity);
  }

  @Get('get')
  @UseGuards(JwtAuthGuard)
  findOne(@Req() req) {
    return this.cartService.getCart(+req.user.id);
  }

  @Delete('clear')
  @UseGuards(JwtAuthGuard)
  clearCart(@Req() req){
    return this.cartService.clearCart(+req.user.id)
  }
  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard)
  remove(@Req() req, @Param('id') id: any) {
    return this.cartService.removeCartItem(+req.user.id,+id);
  }
  @Post('add-item')
  @UseGuards(JwtAuthGuard)
  addToCart(@Req() req, @Body('productId') productId: any,@Body('quantity') quantity:number) {
    return this.cartService.addToCart(+req.user.id, +productId,+quantity);
  }
  @Patch('quantity')
  @UseGuards(JwtAuthGuard)
  changeQuantity(@Req() req, @Body('productId') productId: number,@Body('count') count:number){
    return this.cartService.changeQuantity(+req.user.id, +productId,+count)
  }
}
