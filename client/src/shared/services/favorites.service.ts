import axios from 'axios';

import { getTokenFromLocalStorage } from '../helpers/localStorage.helper';

const tt =axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		Authorization: 'Bearer ' + getTokenFromLocalStorage() || '',
	},
})
export class FavoritesService {
	

	async addToFavorites(id:number){
		const {data} =await tt.post('favorites/add',{
			productId:id,
		})
		return data;
	}
	async findAllFavorites(){
		const {data}=await tt.get('favorites/find');
		return data;
	}
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new FavoritesService()
