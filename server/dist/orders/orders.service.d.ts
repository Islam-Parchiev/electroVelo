import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
export declare class OrdersService {
    private readonly orderRepository;
    constructor(orderRepository: Repository<Order>);
    create(createOrderDto: CreateOrderDto[], id: number): Promise<any[]>;
    findAll(id: number): Promise<Order[]>;
    update(id: number, updateOrderDto: UpdateOrderDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findByOrdersNumber(orderNumber: number): Promise<Order[]>;
}
