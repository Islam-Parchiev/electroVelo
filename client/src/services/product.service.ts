
import axios from 'axios'
// import { ITodo } from "../types"

export class ProductService  {


	private URL = 'http://localhost:4000'

	// async getAll() {
	// return axios.get(`${this.URL}/todos?_start=0&_limit=5`)
	//  }
	 async getProductsByLimit(limit:number,skip:number) {
		return axios.get(`${this.URL}/product/l/limit/${limit}/skip/${skip}`)
	 }
	// async getById(id:string) {
	// 	return axios.get(`${this.URL}/todos/${id}`)
	// }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService()
