import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, Column } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
// import { CartItem } from './cartItem.entity';
import { FavoriteItem } from './favoriteItem.entity';
@Entity()
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.favorites)
  user: User;

  @OneToMany(() => FavoriteItem, favoriteItem => favoriteItem.favorite, { cascade: true,nullable:true })
  items: FavoriteItem[];
}