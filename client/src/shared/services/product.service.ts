
import axios from 'axios'

import { ICard,ResponseProduct } from '../../shared/types/Card'

export class ProductService  {


	private URL = 'http://localhost:4200'

	 async getProductsByLimit(limit:number,skip:number) {
		return axios.get<ICard[]>(`${this.URL}/product/l/limit/${limit}/skip/${skip}`)
	 }

	 async getProductsByFilters(page:number=1,limit:number=10,sortProperty='sortByPrice=ASC',available='false',categories:string[]=[],materials:string[]=[]) {

		return axios.get<ICard[]>(`${this.URL}/product?categories=${categories.length>=1?categories.join(','):'City,Mountain,Triatlone'}
		&materials=${materials.length>=1?materials.join(','):'Steel,Carbon,Aluminium'}&page=${page}&limit=${limit}${sortProperty}
		&available=${available}`)
	 }

	 async getKitItems() {
		return axios.get<{data:ICard[]}>(`${this.URL}/product?categories=Kit&materials=Carbon&page=1&limit=15&sortByPrice=DESC&available=false`)
	 }

	 async getProductsByCategories(category:string) {
		return await axios.get(`${this.URL}/product/byCategories/${category}`)
	 }

	 async getProductById(id:number) {
  	return await axios.get<ResponseProduct>(`${this.URL}/product/findOne/${id}`)
	 }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService()
