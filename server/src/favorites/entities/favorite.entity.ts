
import { User } from 'src/user/entities/user.entity';
import { FavoriteItem } from './favoriteItem.entity';

export class Favorite {
  id: number;

  user: User;

  items: FavoriteItem[];
}