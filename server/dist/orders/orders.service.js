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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("./entities/order.entity");
const typeorm_2 = require("typeorm");
let OrdersService = class OrdersService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async create(createOrderDto, id) {
        const createdOrders = [];
        let orderN = Math.floor((Math.random() * 1000000) + 1);
        if (await this.orderRepository.find({ where: { orderNumber: orderN } })) {
            orderN = Math.floor((Math.random() * 1000000) + 1);
        }
        for (const order of createOrderDto) {
            const createdOrder = await this.orderRepository.save(Object.assign(Object.assign({}, order), { userId: { id }, orderNumber: orderN }));
            createdOrders.push(createdOrder);
        }
        return createdOrders;
    }
    async findAll(id) {
        const orders = await this.orderRepository.find({
            where: {
                userId: { id }
            },
        });
        if (orders.length < 3)
            throw new common_1.NotFoundException('Orders not found');
        return orders;
    }
    update(id, updateOrderDto) {
        return `This action updates a #${id} order`;
    }
    async remove(id) {
        const order = await this.orderRepository.findOne({
            where: { id },
        });
        if (!order)
            throw new common_1.NotFoundException('Transaction not found');
        return await this.orderRepository.delete(id);
    }
    async findByOrdersNumber(orderNumber) {
        const orders = await this.orderRepository.find({
            where: {
                orderNumber: orderNumber
            }
        });
        if (!orders)
            throw new common_1.NotFoundException("Order not Found");
        return orders;
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map