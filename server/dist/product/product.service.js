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
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
const image_entity_1 = require("./entities/image.entity");
const spec_entity_1 = require("./entities/spec.entity");
const size_entity_1 = require("./entities/size.entity");
const color_entity_1 = require("./entities/color.entity");
const helpers_1 = require("../helpers/helpers");
let ProductService = class ProductService {
    constructor(productRepository, imageRepository, specRepository, sizeRepository, colorRepository) {
        this.productRepository = productRepository;
        this.imageRepository = imageRepository;
        this.specRepository = specRepository;
        this.sizeRepository = sizeRepository;
        this.colorRepository = colorRepository;
    }
    async create(productData, imageUrls, specs, sizes, colors) {
        const product = await this.productRepository.create(productData);
        const images = await imageUrls.map(image => this.imageRepository.create({ srcPath: image.srcPath }));
        const speccs = await specs.map(spec => this.specRepository.create({
            year: spec.year,
            brand: spec.brand,
            category: spec.category,
            country: spec.country,
            material: spec.material
        }));
        const sizess = await sizes.map(size => this.sizeRepository.create({
            size: size.size
        }));
        const colorrs = await colors.map(color => this.colorRepository.create({
            color: color.color
        }));
        product.sizes = sizess;
        product.images = images;
        product.specifications = speccs;
        product.colors = colorrs;
        await this.imageRepository.save(images);
        await this.specRepository.save(speccs);
        await this.sizeRepository.save(sizess);
        await this.colorRepository.save(colorrs);
        await this.productRepository.save(product);
        return product;
    }
    async findAll() {
        const products = await this.productRepository.find({
            relations: {
                images: true,
                sizes: true,
                specifications: true,
                colors: true
            }
        });
        if (!products)
            throw new common_1.NotFoundException('Transactions not found');
        return products;
    }
    async getByLimit(limit, skip) {
        const products = this.productRepository.find({
            take: limit,
            skip: skip,
            relations: {
                images: true
            }
        });
        return products;
    }
    async getProducts(sortByPrice, sortByName, page, limit, available, categories, materials) {
        const { skip, take } = (0, helpers_1.calculatePagination)(page, limit);
        const queryBuilder = this.productRepository.createQueryBuilder('product')
            .skip(skip)
            .take(take);
        if (categories) {
            queryBuilder.where('product.category = :category').where('category IN (:...categories)', { categories }).andWhere('material IN (:...materials)', { materials });
            console.log('dasd');
        }
        if (available === 'true') {
            queryBuilder.where('product.available = :available', { available: available });
        }
        if (sortByPrice) {
            queryBuilder.orderBy('product.price', sortByPrice);
        }
        if (sortByName) {
            queryBuilder.orderBy('product.title', sortByName);
        }
        const [data, totalItems] = await queryBuilder.getManyAndCount();
        const totalPages = (0, helpers_1.calculateTotalPages)(totalItems, limit);
        const currentPage = page;
        return { data, currentPage, totalPages };
    }
    async getProductsByCategories(categories) {
        const query = this.productRepository.createQueryBuilder('product');
        query.andWhere('product.category = :category').where('category IN (:...categories)', { categories });
        return query.getMany();
    }
    async getProductsByCategoriesAndMaterials(categories, materials) {
        const query = this.productRepository.createQueryBuilder('product')
            .andWhere('product.category  = :category')
            .andWhere('product.material  = :material')
            .where('category IN (:...categories)', { categories })
            .andWhere('material IN (:...materials)', { materials });
        return query.getMany();
    }
    async findOne(id) {
        const product = await this.productRepository.findOne({
            where: {
                id: id
            },
            relations: {
                images: true,
                colors: true,
                sizes: true,
                specifications: true
            }
        });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        return product;
    }
    async update(id, prevPrice, price) {
        const product = await this.productRepository.findOne({
            where: { id },
        });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        product.prevPrice = prevPrice;
        product.price = price;
        const updatedProduct = await this.productRepository.save(product);
        return updatedProduct;
    }
    async remove(id) {
        const order = await this.productRepository.findOne({
            where: { id },
            relations: {
                images: true,
                specifications: true,
                colors: true,
                sizes: true
            }
        });
        if (!order)
            throw new common_1.NotFoundException('Product not found');
        return await this.productRepository.delete(id);
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(image_entity_1.Image)),
    __param(2, (0, typeorm_1.InjectRepository)(spec_entity_1.Spec)),
    __param(3, (0, typeorm_1.InjectRepository)(size_entity_1.Size)),
    __param(4, (0, typeorm_1.InjectRepository)(color_entity_1.Color)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map