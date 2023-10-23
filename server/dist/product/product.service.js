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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const typeorm_2 = require("typeorm");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(createProductDto) {
        const createdProducts = [];
        for (const product of createProductDto) {
            const jsonProduct = {
                title: product.title,
                description: product.description,
                articul: product.articul,
                price: product.price,
                available: product.available,
                prewPrice: product.prewPrice,
                sizes: JSON.stringify(product.sizes),
                colors: JSON.stringify(product.colors),
                images: JSON.stringify(product.images),
                specifications: JSON.stringify(product.specifications),
                brand: product.brand
            };
            const createdProduct = await this.productRepository.save(Object.assign({}, jsonProduct));
            createdProducts.push(createdProduct);
        }
        return createdProducts;
    }
    async findAllWithLimit(limit) {
        const products = await this.productRepository.find({
            take: limit
        });
        return products;
    }
    async searchProductsByKeyword(keyword) {
        return await this.productRepository
            .createQueryBuilder('product')
            .where('product.title ILIKE :keyword', { keyword: `%${keyword}%` })
            .getMany();
    }
    async findPosts(page = 1, limit = 10, searchTerm, order = 'DESC') {
        const [data, totalItems] = await this.productRepository.findAndCount({
            where: searchTerm
                ? [
                    { title: (0, typeorm_2.Like)(`%${searchTerm}%`) },
                ]
                : {},
            order: { price: order },
            skip: (page - 1) * limit,
            take: limit,
        });
        return { data, totalItems };
    }
    async findOne(id) {
        const product = await this.productRepository.findOne({
            where: {
                id
            }
        });
        const returnedProduct = {
            id: product.id,
            title: product.title,
            description: product.description,
            articul: product.articul,
            price: product.price,
            available: product.available,
            prewPrice: product.prewPrice,
            sizes: JSON.parse(product.sizes),
            colors: JSON.parse(product.colors),
            images: JSON.parse(product.images),
            specifications: JSON.parse(product.specifications),
            brand: product.brand,
        };
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        return returnedProduct;
    }
    update(id, updateProductDto) {
        return `This action updates a #${id} product`;
    }
    async remove(id) {
        const product = await this.productRepository.findOne({
            where: { id },
        });
        if (!product)
            throw new common_1.NotFoundException('Transaction not found');
        return await this.productRepository.delete(id);
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map