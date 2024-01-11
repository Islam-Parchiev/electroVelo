interface IProductSpecification {
	brand:string; 
	category:string;
	country:string;
	id: number;
	material:string;
	year: number;
}
interface IProductImage {
	id:number;
	srcPath:string;
}
interface IProductSize {	
	id: number;
	size:string;
}
interface IProductColor {
	id: number;
	color:string; 
	hexColor: string;
}
export interface ICard {
	prevPrice:string | null;
	id: number
	type: 'primary' | 'secondary'
	title: string
	price: string
	available: boolean
	previewImage: string
	otherClass?: string
	country: string
}
export interface IProduct extends ICard {
	specifications:IProductSpecification[];
	category:any;
	articul:string;
	brand:string;
	description:string;
	images:IProductImage[];
	sizes:IProductSize[];
	colors:IProductColor[];
}
// country,available,previewImage,price,prevPrice,title,id
