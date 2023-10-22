import { User } from "src/user/entities/user.entity";
export declare class Order {
    id: number;
    userId: User;
    title: string;
    date: Date;
    price: number;
    status: boolean;
    orderNumber: number;
}
