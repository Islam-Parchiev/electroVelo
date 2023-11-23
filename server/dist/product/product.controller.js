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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async create(productData, imageUrls, sizes, colors, specs) {
        return this.productService.create(productData, imageUrls, specs, sizes, colors);
    }
    getProducts(sortByPrice, sortByName, page = 1, limit = 10, available, categories) {
        return this.productService.getProducts(sortByPrice, sortByName, page, limit, available, categories);
    }
    getProductsByCategories(categories) {
        return this.productService.getProductsByCategories(categories);
    }
    findAll() {
        return this.productService.findAll();
    }
    getByLimit(limit = 5, skip = 0) {
        return this.productService.getByLimit(+limit, +skip);
    }
    findOne(id) {
        return this.productService.findOne(+id);
    }
    update(id, price, prevPrice) {
        return this.productService.update(+id, +prevPrice, +price);
    }
    remove(id) {
        return this.productService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Body)('imageUrls')),
    __param(2, (0, common_1.Body)('sizes')),
    __param(3, (0, common_1.Body)('colors')),
    __param(4, (0, common_1.Body)('specs')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array, Array, Array, Array]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('sortByPrice')),
    __param(1, (0, common_1.Query)('sortByName')),
    __param(2, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(3, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __param(4, (0, common_1.Query)('available')),
    __param(5, (0, common_1.Query)('categories', new common_1.ParseArrayPipe({ items: String }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number, String, Array]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)('byCategories/:categories'),
    __param(0, (0, common_1.Param)('categories', new common_1.ParseArrayPipe({ items: String }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductsByCategories", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('l/limit/:limit/skip/:skip'),
    __param(0, (0, common_1.Param)('limit')),
    __param(1, (0, common_1.Param)('skip')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getByLimit", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('price')),
    __param(2, (0, common_1.Body)('prevPrice')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "remove", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map