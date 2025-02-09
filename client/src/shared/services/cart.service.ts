import axios from 'axios';

import { getTokenFromLocalStorage } from '../helpers/localStorage.helper';



const tt =axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		Authorization: 'Bearer ' + getTokenFromLocalStorage() || '',
	},
})
export class CartService {
	async addToCart(id:number,quantity:number)	{
		const {data} = await tt.post('cart/add-item',{
			productId:id,
			quantity,
		})
		return data
	}
	async getCart(){
		const {data} = await tt.get('cart/get')
		return data;
	}
	async deleteCartItem(id:number){
		const {data} = await tt.delete(`cart/delete/${id}`)
		return data;
	}
	async changeQuantity(id:number,count:number):Promise<any>{
		const {data}=await tt.patch('cart/quantity',{
			productId:id,
			count:count,
		})
		return data;
	}
	async clearCart():Promise<any>{
		await tt.delete('cart/clear');
	}
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new CartService()
// async registration(userData: IUserData): Promise<IResponseUserData | undefined> {
// 	const { data } = await instance.post<IResponseUserData>('user', userData)
// 	return data
// },

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// async login(userData: IAuthUserData): Promise<IUser | undefined> {
// 	const { data } = await instance.post<IUser>('auth/login', userData)
// 	return data
// },
