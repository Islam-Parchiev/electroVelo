import { Controller, Get, HttpException, HttpStatus, Post,Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,private readonly userService:UserService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req): Promise<any> {
    try {
      const user = req.user;
      const profile = await this.userService.findOne(user.userId);

       if (!profile) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
       }

      return profile
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
