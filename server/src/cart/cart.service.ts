import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { CartItem } from './entities/cartItem.entity';
import { Product } from 'src/product/entities/product.entity';
// import { prisma } from 'prisma/prisma';
import { PrismaClient,cart, cart_item,Prisma } from '@prisma/client';

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
  private prisma = new PrismaClient();

  async addToCart(userId: number, productId: number, quantity: number): Promise<cart|null> {
    let cart = null

    if (await this.prisma.cart.findFirst({
      where:{user:{id:userId}},
      select:{id:true,userId:true,items:{select:{product:true}}}  
    })) {
      cart = await this.prisma.cart.findFirst({
        where:{user:{id:userId}},
        select:{id:true,userId:true,items:{select:{product:true}}}  
      })
      
    }else {
      cart =await this.prisma.cart.create({data:{items:null,userId:userId}});
    }
  
    
    if (cart.items.find((item) =>  item.product.product_id === productId)) {
      let cartItem:cart_item|any =cart.items.find((item) =>  item.product.product_id === productId);
      cartItem.quantity += quantity;
    } else {
      // const product = await this.productRepository.findOne({where:{id:productId}});
      const product = await this.prisma.product.findUnique({where:{product_id:productId}})
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
    return cart
    // return this.cartRepository.save(cart);
  }
  async getCart(userId:number) {


    let cart = await this.prisma.cart.findFirst({
      where:{
        
       user:{
        id:userId
       }
        
      },
      include:{
        items:{select:{product:true,quantity:true}}

      } 

    })
    if(!cart) {
      throw new Error('Cart not found');
    }
    
    let totalPrice= cart.items.reduce((prev,curr)=>prev+(curr.product.price*curr.quantity),0)
    let discount = cart.items.reduce((prev,curr)=>prev+((curr.product.prevPrice-curr.product.price)*curr.quantity),0);
    return {
      cart,
      totalPrice,
      discount,
      priceWithDiscount:totalPrice-discount,
    }
  }
  // async getCartItem(userId:number) {
  //   let cart = await this.cartRepository.findOne({ where: { user: { id: userId } }, relations: {
  //     items:{product:true}

  //   } });
  //   if(!cart) {
  //     throw new Error('Cart not found');
  //   }
  //   // let cartItem = cart.items.find((item) => item.product.id === productId);
  //   return cart
  // }
  async removeCartItem(userId:number,productId:number) {
    let cart = await this.prisma.cart.findFirst({
      where:{
        
       user:{
        id:userId
       }
        
      },
      include:{
        items:{select:{product:true,quantity:true}}

      } 

    })
    if(!cart) {
      throw new Error('Cart not found');
    }

    return await this.prisma.cart_item.delete({where:{id:productId}})

  }
  async clearCart(userId:number) {
    let cart = await this.prisma.cart.findFirst({
      where:{
        
       user:{
        id:userId
       }
        
      },
      include:{
        items:{select:{product:true,quantity:true}}

      } 

    })
    if(!cart) {
      throw new Error('Cart not found');
    }
    return this.prisma.cart.create({data:{items:null,userId:userId}})

  }
	async changeQuantity(userId: number, productId: number, count: number) {
    const cart = await this.prisma.cart.findFirst({
      where: { userId: userId },
      include: { items: { include: { product: true } } }
    });
  
    if (!cart) {
      throw new Error("Cart not found");
    }
  
    const cartItem = cart.items.find((item) => item.productId === productId);
  
    if (cartItem) {
      if (count > 0) {
        return await this.prisma.cart.update({
          where: { id: cart.id },
          data: {
            items: {
              update: {
                where: { id: cartItem.id },
                data: { quantity: count }
              }
            }
          },
          include: { items: { include: { product: true } } }
        });
      } else if (count === 0) {
        return await this.prisma.cart.update({
          where: { id: cart.id },
          data: {
            items: {
              deleteMany: { id: cartItem.id }
            }
          },
          include: { items: { include: { product: true } } }
        });
      }
    } else {
      return "Product not found";
    }
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

  // update(id: number, updateCartDto: UpdateCartDto) {
  //   return `This action updates a #${id} cart`;
  // }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
