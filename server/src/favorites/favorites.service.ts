import { Injectable } from '@nestjs/common';
// import { Favorite } from './entities/favorite.entity';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class FavoritesService {
  constructor(
  ) {}

   private prisma = new PrismaClient();
  async addToFavorites(userId: number, productId: number): Promise<any> {
    if(await this.prisma.favorite.findFirst({where:{user:{id:userId}},include:{favorite_item:true}})) {
      const test =await this.prisma.favorite.findFirst({where:{user:{id:userId}},include:{favorite_item:true}});
      if(test.favorite_item.find((item)=>item.productId===productId)) {
        // Already exists
        const item =test.favorite_item.find((item)=>item.productId===productId);
       await this.prisma.favorite_item.delete({where:{id:item.id}})
        return await this.prisma.favorite.findFirst({where:{user:{id:userId}},include:{favorite_item:true}})
      }
     
    }
    if (await this.prisma.favorite.findFirst({
      where:{user:{id:userId}},  
    })) {
      const favorite = await this.prisma.favorite.findFirst({
        where:{user:{id:userId}},
        select:{id:true}  
      })
      await this.prisma.favorite_item.create({data:{updatedAt:new Date(),favoriteId:favorite.id,productId:productId}})
      return await this.prisma.favorite.findFirst({
        where:{user:{id:userId}},
        include:{
          favorite_item:true
        }
      })
    }else {
      return await this.prisma.favorite.create({data:{favorite_item:{create:{updatedAt:new Date(),productId:productId}},userId:userId,updatedAt:new Date()}});
    }

  }
  async findAll(userId:number) {
    let favorite = await this.prisma.favorite.findFirst({where:{user:{id:userId}},include:{favorite_item:{include:{product:true}}}})
    if(!favorite) throw new Error('Favorite not found');
    return favorite;
  }

}
