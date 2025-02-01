export interface ICartProduct {
	articul:string;
available: boolean;
brand:string; 
category:string;
country:string;
description:string;
id:number;
material:string;
prevPrice:number;
previewImage:string;
price:number;
title:string;
}
export interface ICartItem {
id:number;
product: ICartProduct
quantity:number;
}
export interface ICart {
	id:number;
	items:ICartItem[];
}
export interface ICartData {
cart:ICart;
totalPrice:number;
discount:number;
priceWithDiscount:number;
}
