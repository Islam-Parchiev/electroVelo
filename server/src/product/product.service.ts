import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Image } from './entities/image.entity';
import { Spec } from './entities/spec.entity';
import { Size } from './entities/size.entity';
import { Color } from './entities/color.entity';
import { calculatePagination, calculateTotalPages } from '../helpers/helpers';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository:Repository<Product>,
    @InjectRepository(Image)
    private readonly imageRepository:Repository<Image>,
    @InjectRepository(Spec)
    private readonly specRepository:Repository<Spec>,
    @InjectRepository(Size)
    private readonly sizeRepository:Repository<Size>,
    @InjectRepository(Color)
    private readonly colorRepository:Repository<Color>,
  ){}
  // create(createProductDto: CreateProductDto) {

  //   return 'This action adds a new product';
  // }
  // const createdOrder = await this.orderRepository.save({...order,userId:{id},orderNumber:orderN});
  async create(productData: Partial<Product>, 
    imageUrls: Image[],
    specs:Spec[],
    sizes:Size[],
    colors:Color[]
    ): Promise<Product> {
    const product = await this.productRepository.create(productData);
    const images =await imageUrls.map(image => this.imageRepository.create({ srcPath:image.srcPath }));
    const speccs =await specs.map(spec => this.specRepository.create({
                                                                  year:spec.year,
                                                                  brand:spec.brand,
                                                                  category:spec.category,
                                                                  country:spec.country,
                                                                  material:spec.material
                                                                
                                                                }))
    const sizess =await sizes.map(size => this.sizeRepository.create({
       size:size.size
      
    }))   
    const colorrs =await colors.map(color => this.colorRepository.create({
      color:color.color
     
   }))                   
    product.sizes = sizess;                                            
    product.images = images;
    product.specifications=speccs;
    product.colors = colorrs;

    await this.imageRepository.save(images);
    await this.specRepository.save(speccs);
    await this.sizeRepository.save(sizess);
    await this.colorRepository.save(colorrs);
    await this.productRepository.save(product);
    return product;
  }
  async  findAll() {
    const products = await this.productRepository.find({
     
      relations:{
        images:true,
        sizes:true,
        specifications:true,
        colors:true
      }
    })
    if(!products) throw new NotFoundException('Transactions not found')
    return products;
  }

  async getByLimit(limit:number,skip:number){
      const products = this.productRepository.find({
        take:limit,
        skip:skip,
        relations:{
          images:true
        }
      })
      return products;
  }

  async getProducts(
    sortByPrice: 'ASC' | 'DESC',
    sortByName: 'ASC' | 'DESC',
    page: number,
    limit: number,
  ): Promise<{ data: Product[], currentPage: number, totalPages: number }> {
    const { skip, take } = calculatePagination(page, limit);
  
    const queryBuilder = this.productRepository.createQueryBuilder('product')
    .leftJoinAndSelect('product.images','image')
    .skip(skip)
    .take(take)
 
  
    if (sortByPrice) {
      queryBuilder.orderBy('product.price', sortByPrice);
    }
  
    if (sortByName) {
      queryBuilder.orderBy('product.title', sortByName);
    }
  
    const [data, totalItems] = await queryBuilder.getManyAndCount();
    const totalPages = calculateTotalPages(totalItems, limit);
    const currentPage = page;
  
    return { data, currentPage, totalPages };
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {

    const order = await this.productRepository.findOne({
      where:{id},
      relations:{
        images:true,
        specifications:true,
        colors:true,
        sizes:true
      }
    })
    if(!order) throw new NotFoundException('Product not found')
      return await this.productRepository.delete(id);
    }
}
// "productData":{
// 	"title":"TeSSSt",
// 	"description": "Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. Одна из самых лёгких рам среди гоночных хардтейлов для кросс-кантри. Scott Scale 700 RC — это рама из композитного волокна HMX, гоночная трансмиссия Sram XX1/X01 1×11, дисковые тормоза Shimano XTR M9000 и гоночные колеса Syncros XR RC. Байк Нино Шуртера для шорт-трек кросс-кантри.",
// 	"articul": "7655-188",	
// 		"price": "444",
// 		"prewPrice": "555",
	
// },
// 	"imageUrls":[{"srcPath":"1.1.hpg"}],
// 	"sizes":[{"size":"1"}],
//   "colors":[{"color":"RED"}],
// 	"specs":[{"year":"2016","country":"Russia","material":"Karbon","brand":"Scott","category":"Mountain"}],
	