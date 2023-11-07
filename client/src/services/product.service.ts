
import axios from 'axios'
// import { ITodo } from "../types"

class ProductService  {


	private URL = 'http://localhost:4000'

	// async getAll() {
	// return axios.get(`${this.URL}/todos?_start=0&_limit=5`)
	//  }
	 async getProductsByLimit(limit:number) {
		return axios.get(`${this.URL}/product/limit/${limit}`)
	 }
	// async getById(id:string) {
	// 	return axios.get(`${this.URL}/todos/${id}`)
	// }
}

export default new ProductService()
