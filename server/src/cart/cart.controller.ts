import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { IsNumber } from 'class-validator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Get('get/:id')
  @UseGuards(JwtAuthGuard)
  findOne(@Req() req,@Param('id') productId: any) {
    return this.cartService.getCartItem(+productId,+req.user.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }
  @Post('add-item')
  @UseGuards(JwtAuthGuard)
  addToCart(@Req() req, @Body('productId') productId: any,@Body('quantity') quantity:number) {
    return this.cartService.addToCart(+req.user.id, +productId,+quantity);
  }

  // @Get(':userId/items')
  // getCartItems(@Param('userId') userId: number) {
  //   return this.cartService.getCartItems(userId);
  // }
}
