
import { ICard } from 'Card'
import axios from 'axios'
// import { ITodo } from "../types"

export class ProductService  {


	private URL = 'http://localhost:4000'

	// async getAll() {
	// return axios.get(`${this.URL}/todos?_start=0&_limit=5`)
	//  }
	 async getProductsByLimit(limit:number,skip:number) {
		return axios.get<ICard[]>(`${this.URL}/product/l/limit/${limit}/skip/${skip}`)
	 }
	 async getProductsByFilters(page:number=1,limit:number=10,sortProperty='sortByPrice=ASC',available='false',categories:string[]=[]) {
		//  let categoriesStr = '';
		// categories.join(',');
		// console.log(categories.join(','));
		// ${categories&&'&categories='}
		// http://localhost:4000/product?categories=Triatlone,Mountain,City&page=2&limit=10&sortByPrice=DESC&available=false
		return axios.get<ICard[]>(`${this.URL}/product?categories=${categories.length>=1?categories.join(','):'City,Mountain,Triatlone'}&page=${page}&limit=${limit}${sortProperty}
		&available=${available}`)
	 }
	// async getById(id:string) {
	// 	return axios.get(`${this.URL}/todos/${id}`)
	// }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService()
