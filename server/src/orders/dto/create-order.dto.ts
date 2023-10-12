import {} from "class-validator";
export class CreateOrderDto {
   id:number;
   userId:number;
   imageUrl:string;
   price:number;
   title:string;
   orderNumber:number;
   status:boolean;
}
