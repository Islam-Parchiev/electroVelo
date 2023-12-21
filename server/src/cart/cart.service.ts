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
    // const totalPrice = data?.items.reduce((prev,curr)=>prev+(curr.product.price*curr.quantity),0);
    
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
    let cart = await this.cartRepository.findOne({ where: { user: { id: userId } }, relations: {
      items:{product:true}

    } });
    if(!cart) {
      throw new Error('Cart not found');
    }

    return await this.cartItemRepository.delete(productId)

  }
	async changeQuantity(userId:number,productId:number,count:number){
		let cart = await this.cartRepository.findOne({ where: { user: { id: userId } },
			relations: {items:{product:true}} });

			if (cart.items.find((item) =>  item.id === productId)) {
				let cartItem =cart.items.find((item) =>  item.id === productId);
				if(count>0){
					cartItem.quantity=count;
					return await this.cartRepository.save(cart)
				}
				if(count===0){
					// await this.cartItemRepository.delete(productId)
					let filteredCartItems=cart.items.filter((item)=>item.id!==productId)
					cart.items=[...filteredCartItems]
					await this.cartRepository.save(cart)
					return filteredCartItems
				}
				// if(type==='plus'){
				// 	 cartItem.quantity = cartItem.quantity+1;
				// 	 return this.cartRepository.save(cart)
				// }
				// if(type==='minus'){
				// 	cartItem.quantity = cartItem.quantity-1;
				// 	return this.cartRepository.save(cart)
				// }
			} else {
				return "Product not found"
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
