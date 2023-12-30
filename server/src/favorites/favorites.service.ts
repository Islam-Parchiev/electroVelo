import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { Favorite } from './entities/favorite.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FavoriteItem } from './entities/favoriteItem.entity';
import { Product } from 'src/product/entities/product.entity';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(Favorite)
    private favoriteRepository: Repository<Favorite>,
    @InjectRepository(FavoriteItem)
    private cartItemRepository: Repository<FavoriteItem>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  create(createFavoriteDto: CreateFavoriteDto) {
    return 'This action adds a new favorite';
  }
  async addToFavorites(userId: number, productId: number): Promise<Favorite> {

    let favorite = await this.favoriteRepository.findOne({ where: { user: { id: userId } },
       relations: {items:{product:true}} });

    if (!favorite) {
      favorite = new Favorite();
      favorite.user = { id: userId } as any;
      favorite.items = [];
    }
    
    // let cartItem = cart.items.find((item) =>  item.product.id === productId);
    
    if (favorite.items.find((item) =>  item.product.id === productId)) {
      let filteredItems =favorite.items.filter((item)=>item.product.id!==productId);
      // console.log(favorite.items.filter((item)=>item.product.id!==productId));
      favorite.items=[...filteredItems];
      // .filter(item=> item!==1);
    } else {
      const product = await this.productRepository.findOne({where:{id:productId}});
      if (product) {
        let favoriteItem=null;
        favoriteItem = new FavoriteItem();
        favoriteItem.product = product;
        
        favorite.items.push(favoriteItem);
      } else {
        throw new Error('Product not found');
      }
    }

    return this.favoriteRepository.save(favorite);
  }
  async findAll(userId:number) {

    let favorite = await this.favoriteRepository.findOne({ where: { user: { id: userId } },
      relations: {items:{product:true}} });

      if(!favorite) throw new Error('Favorite not found');
    return favorite;
  }

  findOne(id: number) {
    return `This action returns a #${id} favorite`;
  }

  update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
    return `This action updates a #${id} favorite`;
  }

  remove(id: number) {
    return `This action removes a #${id} favorite`;
  }
}
