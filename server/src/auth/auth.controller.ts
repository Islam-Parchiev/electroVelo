import { Controller, Get, HttpException, HttpStatus, Post,Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UserService } from 'src/user/user.service';
interface IProfile {
  
    id: number;
    name: string;
    surname: string|null;
    showname: string|null;
    email: string;
    phone_number: string|null;
    city: string|null;
    street: string|null;
    house: string|null;
    floor: string|null;
    flat_number: string|null;
    password: string;
    createdAt: Date
    updatedAt: Date
  
}
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,private readonly userService:UserService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    console.log("auth.controller 14:",req.user)
    return this.authService.login(req.user);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req):Promise<IProfile|unknown> {
    try {
      const user = req.user;
      console.log(req.userId)
      const profile = await this.userService.findOne(user.userId);
      console.log(req.user);
       if (profile instanceof Error) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
       }
       console.log(profile);
      return profile
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
