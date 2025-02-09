import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CartService {
  private prisma:PrismaClient;
  constructor() {
    this.prisma = new PrismaClient()
  }

  async addToCart(userId: number, productId: number, quantity: number) {
    if (await this.prisma.cart.findFirst({
      where:{user:{id:userId}},  
    })) {
      console.log('cart.service 16')
      const cart = await this.prisma.cart.findFirst({
        where:{user:{id:userId}},
        include:{items:{include:{product:true}}}, 
        // select:{id:true,items:true} 
      })
      if(cart.items.find((item)=>item.productId===productId)) {
        const item = cart.items.find((item)=>item.productId===productId);

        await this.prisma.cart_item.update({where:{id:item.id},data:{quantity:{increment:1}}})

        return await this.prisma.cart.findFirst({
          where:{user:{id:userId}},
          include:{items:{include:{product:true}}}, 
          // select:{id:true,items:true} 
        })
      }
      await this.prisma.cart_item.create({data:{quantity:quantity,updatedAt:new Date(),cartId:cart.id,productId:productId}})
      return await this.prisma.cart.findFirst({
        where:{user:{id:userId}},
        include:{
          items:true
        } 
      })
    }else {
      console.log('cart.service 22')
      return await this.prisma.cart.create({data:{items:{create:{quantity:quantity,updatedAt:new Date(),productId:productId}},userId:userId,updatedAt:new Date()}});
    }
  
  }



  async getCart(userId:number) {


    let cart = await this.prisma.cart.findFirst({
      where:{
        
       user:{
        id:userId
       }
        
      },
      include:{
        items:{select:{id:true,product:true,quantity:true}}

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
  async removeCartItem(userId:number,cartItemId:number) {
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

    return await this.prisma.cart_item.delete({where:{id:cartItemId}})

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
    if(cart.items.length>0) {
     await this.prisma.cart_item.deleteMany({where:{cartId:cart.id}})
     await this.prisma.cart.update({where:{id:cart.id},data:{updatedAt:new Date()}})
    }
    return await this.prisma.cart.findFirst({where:{id:cart.id},include:{items:{include:{product:true}}}})

  }
	async changeQuantity(userId: number, cartItemId: number, count: number) {
    const cart = await this.prisma.cart.findFirst({
      where: { userId: userId },
      include: { items: { include: { product: true } } }
    });
  
    if (!cart) {
      throw new Error("Cart not found");
    }
    if(cart.items.find((item)=>item.id===cartItemId)) {
     return await this.prisma.cart_item.update({where:{id:cartItemId},data:{quantity:count}})
    }else {
      return 'Error'
    }
  
  }
	
}
