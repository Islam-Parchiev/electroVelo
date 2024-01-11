interface ICardSpecification {
	brand:string; 
	category:string;
	country:string;
	id: number;
	material:string;
	year: number;
}
interface ICardImage {
	id:number;
	srcPath:string;
}
interface ICardSize {	
	id: number;
	size:string;
}
interface ICardColor {
	id: number;
	color:string; 
	hexColor: string;
}
export interface ICard {
	articul:string;
	available:boolean;
	brand:string;
	description:string;
	id:number;
	images:ICardImage[];
	prevPrice:string | null;
	price:string;
	title:string;
	previewImage:string;
	country:string;
	sizes:ICardSize[];
	colors:ICardColor[];
}
export interface IProduct extends ICard {
	specifications:ICardSpecification[];
	category:any;
}
