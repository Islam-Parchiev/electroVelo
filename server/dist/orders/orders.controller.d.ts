import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto[], req: any): Promise<any[]>;
    findAll(req: any): Promise<import("./entities/order.entity").Order[]>;
    findByOrdersNumber(orderNumber: string): Promise<import("./entities/order.entity").Order[]>;
    update(id: string, updateOrderDto: UpdateOrderDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
