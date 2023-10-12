import { Injectable,BadRequestException, Inject, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository:Repository<Order>
  ){}
 async create(createOrderDto: CreateOrderDto[],id:number) {
  //   const newOrder = {
  //     title:createOrderDto.title,
  //     userId:{id},
  //  imageUrl:createOrderDto.imageUrl,
  //  price:createOrderDto.price,
  //  orderNumber:createOrderDto.orderNumber,
  //  status:createOrderDto.status
  //   }
  //   const newOrder = {
  //     title:createOrderDto.title,
  //     userId:{id},
  //  imageUrl:createOrderDto.imageUrl,
  //  price:createOrderDto.price,
  //  orderNumber:createOrderDto.orderNumber,
  //  status:createOrderDto.status
  //   }
  //   if(!newOrder) throw new BadRequestException('Something went wrong...')
  //   return await this.orderRepository.save(newOrder)

  // const orderr = createOrderDto.map(order=> {
  //   ...order,
  //   userId:{id}


  // })

  const createdOrders = [];
  let orderN = Math.floor((Math.random() * 1000000) + 1);

if(await this.orderRepository.find({where:{orderNumber:orderN}})) {
  orderN=Math.floor((Math.random() * 1000000) + 1);
}

  for (const order of createOrderDto) {
    const createdOrder = await this.orderRepository.save({...order,userId:{id},orderNumber:orderN});
    createdOrders.push(createdOrder);
  }
  return createdOrders;

  // console.log(createOrderDto)
  // return "Test"
  }

 async findAll(id:number) {
    const orders = await this.orderRepository.find({
      where: {
        userId:{id}
      },
      // relations:{
      //   category:true,
      // },
      // // сортировка
      // order: {
      //   createdAt:'DESC',
      // }
    })
    if(orders.length < 3) throw new NotFoundException('Orders not found')
    return orders;
    // return `This action returns all orders`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} order`;
  // }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

 async remove(id: number) {

  const order = await this.orderRepository.findOne({
    where:{id},
  })
  if(!order) throw new NotFoundException('Transaction not found')
    return await this.orderRepository.delete(id);
  }

  async findByOrdersNumber(orderNumber:number) {
   const orders = await this.orderRepository.find({
    where: {
      // @ts-ignore
      orderNumber:orderNumber
    }
   })

   if(!orders) throw new NotFoundException("Order not Found")
   return orders
  }
}
// "name":"tss",
// 	"email":"ddddss22@gmail.com",
// 	"password":"333333"