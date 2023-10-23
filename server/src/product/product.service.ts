import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository:Repository<Product>
  ){}
  

 async create(createProductDto: CreateProductDto[]) {

    const createdProducts= [];
  //   let orderN = Math.floor((Math.random() * 1000000) + 1);
  
  // if(await this.orderRepository.find({where:{orderNumber:orderN}})) {
  //   orderN=Math.floor((Math.random() * 1000000) + 1);
  // }
  
    for (const product of createProductDto) {
      const jsonProduct = {
        
    title:product.title,
    description:product.description,
    articul:product.articul,
    price:product.price,
    available:product.available,
    prewPrice:product.prewPrice,
    sizes:JSON.stringify(product.sizes),
    colors:JSON.stringify(product.colors),
    images:JSON.stringify(product.images),
    specifications:JSON.stringify(product.specifications),
    brand:product.brand
      }
      // @ts-ignore
      const createdProduct = await this.productRepository.save({...jsonProduct});
      createdProducts.push(createdProduct);
    }
    return createdProducts;
  

  }

 async  findAllWithLimit(limit:number) {
    const products = await this.productRepository.find({
      take:limit
    })

    return products
  }

  async searchProductsByKeyword(keyword: string): Promise<Product[]> {
    return await this.productRepository
      .createQueryBuilder('product')
      .where('product.title ILIKE :keyword', { keyword: `%${keyword}%` })
      // .orWhere('product.content ILIKE :keyword', { keyword: `%${keyword}%` })
      .getMany();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({
      where: {
        id
      }
    })
    const returnedProduct = {
      id:product.id,
       title:product.title,
       description:product.description,
    articul:product.articul,
    price:product.price,
    available:product.available,
    prewPrice:product.prewPrice,
    sizes:JSON.parse(product.sizes),
    colors:JSON.parse(product.colors),
    images:JSON.parse(product.images),
    specifications:JSON.parse(product.specifications),
    brand:product.brand,
    }
    if(!product) throw new NotFoundException('Product not found')
    return returnedProduct;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

 async remove(id: number) {
  const product = await this.productRepository.findOne({
    where:{id},
  })
  if(!product) throw new NotFoundException('Transaction not found')
    return await this.productRepository.delete(id);
    
  }
}
