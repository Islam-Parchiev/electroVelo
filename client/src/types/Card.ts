interface ICardImage {
	id:number;
	srcPath:string;
}
interface ICardSize {	
	id: number;
	size:string;
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
	sizes?:ICardSize[];
}
