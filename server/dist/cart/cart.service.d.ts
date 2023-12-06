import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { CartItem } from './entities/cartItem.entity';
import { Product } from 'src/product/entities/product.entity';
export declare class CartService {
    private cartRepository;
    private cartItemRepository;
    private productRepository;
    constructor(cartRepository: Repository<Cart>, cartItemRepository: Repository<CartItem>, productRepository: Repository<Product>);
    addToCart(userId: number, productId: number, quantity: number): Promise<Cart>;
    getCart(userId: number): Promise<Cart>;
    getCartItem(userId: number): Promise<Cart>;
    removeCartItem(userId: number, productId: number): Promise<import("typeorm").DeleteResult>;
    create(createCartDto: CreateCartDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCartDto: UpdateCartDto): string;
    remove(id: number): string;
}
