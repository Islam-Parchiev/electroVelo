import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { Image } from './entities/image.entity';
import { Spec } from './entities/spec.entity';
import { Size } from './entities/size.entity';
import { Color } from './entities/color.entity';
import { PrismaClient,product } from '@prisma/client';


export interface GP { category: string; material: string; available: boolean; price: number; title: string; product_id: number; description: string; articul: string; prevPrice: number; previewImage: string; brand: string; country: string; }
@Injectable()
export class ProductService {
  constructor(){}
    private prisma = new PrismaClient();


  async create(
    productData: Partial<Product>,
    imageUrls: Image[],
    specs: Spec[],
    sizes: Size[],
    colors: Color[]
  ):Promise<any> {
    return await this.prisma.product.create({
      data: {
        ...productData,
        image: {
          create: imageUrls.map(image => ({ srcPath: image.srcPath }))
        },
        spec: {
          create: specs.map(spec => ({
            year: spec.year,
            brand: spec.brand,
            category: spec.category,
            country: spec.country,
            material: spec.material
          }))
        },
        size: {
          create: sizes.map(size => ({
            size: size.size
          }))
        },
        color: {
          create: colors.map(color => ({
            color: color.color,
            hexColor: color.hexColor
          }))
        }
      },
      include: {
        // images: true,
        // specifications: true,
        // size: true,
        // colors: true
        image:true,
        spec:true,
        size:true,
        color:true
      }
    });
  }
  async  findAll() {
    const products = await this.prisma.product.findMany({
      include:{
        image:true,
        size:true,
        spec:true,
        color:true
      }
    })
    if(!products) throw new NotFoundException('Transactions not found')
      return products;
  }

  async getByLimit(limit:number,skip:number){

      const products = this.prisma.product.findMany({
        take:limit,
        skip:skip,
        include:{
          image:true,
        }
      })
      if(!products) throw new NotFoundException('Products not found')
        return products;
  }

  async getProducts(
    sortByPrice: 'ASC' | 'DESC',
    sortByName: 'ASC' | 'DESC',
    page: number,
    limit: number,
    available: string,
    categories: string[],
    materials: string[]
  ): Promise<{ data: GP[], currentPage: number, totalPages: number }> {
    const skip = (page - 1) * limit;
    
    const whereClause: any = {};
    
    if (categories && categories.length > 0) {
      whereClause.category = { in: categories };
    }
    
    if (materials && materials.length > 0) {
      whereClause.material = { in: materials };
    }
    
    if (available === 'true') {
      whereClause.available = true;
    }
  
    const orderBy: any = {};
    if (sortByPrice) {
      orderBy.price = sortByPrice;
    }
    if (sortByName) {
      orderBy.title = sortByName;
    }
  
    const [data, totalItems] = await Promise.all([
      this.prisma.product.findMany({
        where: whereClause,
        skip,
        take: limit,
        orderBy,
      }),
      this.prisma.product.count({ where: whereClause })
    ]);
  
    const totalPages = Math.ceil(totalItems / limit);
    const currentPage = page;
  
    return { data, currentPage, totalPages };
  }
  async getProductsByCategories(categories: string[]) {
    return this.prisma.product.findMany({
      where: {
        category: {
          in: categories
        }
        
      },
      include:{
        size:true,
        color:true,
        image:true,
        spec:true
      }
    });
  }
async getProductsByCategoriesAndMaterials(categories: string[], materials: string[]): Promise<product[]> {
  return await this.prisma.product.findMany({
    where: {
      AND: [
        { category: { in: categories } },
        { material: { in: materials } }
      ]
    }
  });
}

  async findOne(id: number) {
 
    const product = await this.prisma.product.findUnique({
      where:{
        product_id:id
      },
      include:{
        image:true,
        color:true,
        size:true,
        spec:true
      }
    })
    if(!product) throw new NotFoundException('Product not found')
    return product;
  }

  async update(id:number,updatedFields:any) {
  const product = await this.prisma.product.findUnique({
    where:{
      product_id:id
    }
  })
  const updatedProduct = await this.prisma.product.update({
    where:{
      product_id:id,
    },
    data:{
      ...product,
      ...updatedFields
    }
  })

return updatedProduct
  }

  async remove(id: number) {
    const product = await this.prisma.product.findUnique({
      where:{
        product_id:id,
      },
      include:{
        color:true,
        spec:true,
        image:true,
        size:true
      }
    })
    if(!product) throw new NotFoundException('Product not found')
      return await this.prisma.product.delete({where:{product_id:+id}})


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
}