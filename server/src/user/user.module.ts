import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
  JwtModule.registerAsync({
    imports:[ConfigModule],
    useFactory:(configService:ConfigService)=> ({
      secret:configService.get('JWT_SECRET'),
      signOptions:{
        expiresIn:'30d'
      },
    }),
    inject:[ConfigService]
  })],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService],
})
export class UserModule {}
