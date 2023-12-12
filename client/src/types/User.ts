export interface IUser {
	id:number;
	email:string;
	token:string;
	
}

export interface IUserData {
	name:string;
	email:string;
	password:string;
}

export interface IResponseUser {
	email:string;
	id?:number;
	createdAt:string;
	updatedAt:string;
	password:string;
	// __v?:number;
	// message:string;
}

export interface IResponseUserData {
 token:string
 user:IResponseUser
}
