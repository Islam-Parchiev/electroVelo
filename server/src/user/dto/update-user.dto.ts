import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNotEmpty,IsOptional, IsString,IsNumber } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    
   @IsString()
   @IsOptional()
    name: string;
  
    @IsEmail()
    @IsOptional()
    email: string;

  
     @IsString()
     @IsOptional()
    surname:string;  
  
     @IsString()
     @IsOptional()
    showname:string;

    @IsString()
    @IsOptional()
    phoneNumber:string;
  
     @IsString()
     @IsOptional()
    city:string;
  
     @IsString()
     @IsOptional()
    street:string;
  
    @IsNumber()
    @IsOptional()
    house:number;
  
    @IsNumber()
    @IsOptional()
    floor:number;
  
    @IsNumber()
    @IsOptional()
    flatNumber:number;
}
