import {MinLength,IsString,IsNotEmpty,IsEmail } from "class-validator"
export class CreateUserDto {
    // @IsEmail()
    // email:string

    // @MinLength(6,{message:'Password must be more then 6 symbols'})
    // password:string
   @IsString()
   @IsNotEmpty()
    name: string;
  
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    password:string;
    
//   @Column()
//   name: string;

//   @Column()
//   email: string;

//   @Column()
//   password:string;
    
}
