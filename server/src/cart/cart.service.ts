import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { CartItem } from './entities/cartItem.entity';
import { Product } from 'src/product/entities/product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private cartItemRepository: Repository<CartItem>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async addToCart(userId: number, productId: number, quantity: number): Promise<Cart> {

    let cart = await this.cartRepository.findOne({ where: { user: { id: userId } },
       relations: {items:{product:true}} });

    if (!cart) {
      cart = new Cart();
      cart.user = { id: userId } as any;
      cart.items = [];
    }
    
    // let cartItem = cart.items.find((item) =>  item.product.id === productId);
    
    if (cart.items.find((item) =>  item.product.id === productId)) {
      let cartItem =cart.items.find((item) =>  item.product.id === productId);
      cartItem.quantity += quantity;
    } else {
      const product = await this.productRepository.findOne({where:{id:productId}});
      if (product) {
        let cartItem=null;
        cartItem = new CartItem();
        cartItem.product = product;
        cartItem.quantity = quantity;
        cart.items.push(cartItem);
      } else {
        throw new Error('Product not found');
      }
    }

    return this.cartRepository.save(cart);
  }
  async getCart(userId:number) {
    let cart = await this.cartRepository.findOne({ where: { user: { id: userId } }, relations: {
      items:{product:true}

    } });
    if(!cart) {
      throw new Error('Cart not found');
    }
    return cart
  }
  async getCartItem(userId:number) {
    let cart = await this.cartRepository.findOne({ where: { user: { id: userId } }, relations: {
      items:{product:true}

    } });
    if(!cart) {
      throw new Error('Cart not found');
    }
    // let cartItem = cart.items.find((item) => item.product.id === productId);
    return cart
  }
  async removeCartItem(userId:number,productId:number) {
    let cart = await this.cartRepository.findOne({ where: { user: { id: userId } }, relations: {
      items:{product:true}

    } });
    if(!cart) {
      throw new Error('Cart not found');
    }

    return await this.cartItemRepository.delete(productId)

  }
  create(createCartDto: CreateCartDto) {
    return 'This action adds a new cart';
  }

  findAll() {
    return `This action returns all cart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
