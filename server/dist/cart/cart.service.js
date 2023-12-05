"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cart_entity_1 = require("./entities/cart.entity");
const typeorm_2 = require("typeorm");
const cartItem_entity_1 = require("./entities/cartItem.entity");
const product_entity_1 = require("../product/entities/product.entity");
let CartService = class CartService {
    constructor(cartRepository, cartItemRepository, productRepository) {
        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
        this.productRepository = productRepository;
    }
    async addToCart(userId, productId, quantity) {
        let cart = await this.cartRepository.findOne({ where: { user: { id: userId } },
            relations: { items: { product: true } } });
        if (!cart) {
            cart = new cart_entity_1.Cart();
            cart.user = { id: userId };
            cart.items = [];
        }
        if (cart.items.find((item) => item.product.id === productId)) {
            let cartItem = cart.items.find((item) => item.product.id === productId);
            cartItem.quantity += quantity;
        }
        else {
            const product = await this.productRepository.findOne({ where: { id: productId } });
            if (product) {
                let cartItem = null;
                cartItem = new cartItem_entity_1.CartItem();
                cartItem.product = product;
                cartItem.quantity = quantity;
                cart.items.push(cartItem);
            }
            else {
                throw new Error('Product not found');
            }
        }
        return this.cartRepository.save(cart);
    }
    async getCart(userId) {
        let cart = await this.cartRepository.findOne({ where: { user: { id: userId } }, relations: {
                items: { product: true }
            } });
        if (!cart) {
            throw new Error('Cart not found');
        }
        return cart;
    }
    async getCartItem(productId, userId) {
        let cart = await this.cartRepository.findOne({ where: { user: { id: userId } }, relations: {
                items: { product: true }
            } });
        if (!cart) {
            throw new Error('Cart not found');
        }
        let cartItem = cart.items.find((item) => item.product.id === productId);
        return cart;
    }
    create(createCartDto) {
        return 'This action adds a new cart';
    }
    findAll() {
        return `This action returns all cart`;
    }
    findOne(id) {
        return `This action returns a #${id} cart`;
    }
    update(id, updateCartDto) {
        return `This action updates a #${id} cart`;
    }
    remove(id) {
        return `This action removes a #${id} cart`;
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cart_entity_1.Cart)),
    __param(1, (0, typeorm_1.InjectRepository)(cartItem_entity_1.CartItem)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map