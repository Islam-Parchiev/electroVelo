import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(createCartDto: CreateCartDto): string;
    findAll(): string;
    findOne(req: any, productId: any): Promise<import("./entities/cart.entity").Cart>;
    update(id: string, updateCartDto: UpdateCartDto): string;
    remove(id: string): string;
    addToCart(req: any, productId: any, quantity: number): Promise<import("./entities/cart.entity").Cart>;
}
