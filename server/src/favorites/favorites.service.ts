import { Injectable } from '@nestjs/common';
// import { Favorite } from './entities/favorite.entity';
import { PrismaClient,favorite } from '@prisma/client';

@Injectable()
export class FavoritesService {
  constructor(
  ) {}

   private prisma = new PrismaClient();
  async addToFavorites(userId: number, productId: number): Promise<favorite|null> {
    let favorite = null;
  
    if (await this.prisma.favorite.findFirst({
      where:{user:{id:userId}},
      select:{id:true,userId:true,favorite_item:{select:{product:true}}}  
    })) {
      favorite = await this.prisma.favorite.findFirst({
        where:{user:{id:userId}},
        select:{id:true,userId:true,favorite_item:{select:{product:true}}}  
      })
    }else {
      favorite =await this.prisma.favorite.create({data:{favorite_item:null,userId:userId}});
    }

    if (favorite.favorite_item.find((item)=> item.product.product_id===productId)) {
      await this.prisma.favorite.update({
        where: { id: favorite.id },
        data: {
          favorite_item: {
            deleteMany: { productId }
          }
        }
      });
    } else {
      const product = await this.prisma.product.findUnique({
        where: { product_id: productId }
      });
  
      if (!product) {
        throw new Error('Product not found');
      }
  
      await this.prisma.favorite.update({
        where: { id: favorite.id },
        data: {
          favorite_item: {
            create:{product:{connect:{product_id:productId}}}
          }
        }
      });
    }
  
    return await this.prisma.favorite.findUnique({
      where: { id: favorite.id },
      include: { favorite_item: { include: { product: true } } }
    });
  }
  async findAll(userId:number) {
    let favorite = await this.prisma.favorite.findFirst({where:{user:{id:userId}},include:{favorite_item:{include:{product:true}}}})
    if(!favorite) throw new Error('Favorite not found');
    return favorite;
  }

}
