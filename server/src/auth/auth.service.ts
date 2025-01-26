import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { UserService } from 'src/user/user.service';
import * as argon2 from "argon2";
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types/user';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService:JwtService,
    ) {}
private prisma = new PrismaClient();
  async validateUser(email:string, password: string){
    const user = await this.prisma.user.findFirstOrThrow({ where: {email:email},select:{password:true} });
console.log("15")
console.log(user);
    const passwordIsMatch = await argon2.verify(user.password,password)
console.log("ussss",user);
console.log("pssssssssssssssssssssssssssssssssssssssssssssssss",passwordIsMatch);
    if (user && passwordIsMatch) {
     return user
    }

    throw new UnauthorizedException('User or password are incorrect!')

  }



  async login(user: IUser) {
    const {id,email,name} = user;
    console.log('31')
    return {
      id,
      email,
      name,
      token:this.jwtService.sign({id:user.id,email:user.email,name:user.name})
    }
  }
}
