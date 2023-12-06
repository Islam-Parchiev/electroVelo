interface ICardImage {
	id:number;
	srcPath:string;
}
export interface ICard {
	articul:string;
	available:boolean;
	brand:string;
	description:string;
	id:number;
	images:ICardImage[];
	prewPrice:string | null;
	price:string;
	title:string;
	previewImage:string;
	country:string;
	sizes?:string[];
}
