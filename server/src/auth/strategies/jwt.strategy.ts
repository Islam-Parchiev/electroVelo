import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IUser } from 'src/types/user';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly ConfigService:ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: ConfigService.get('JWT_SECRET'),
    });
  }

  async validate(user: IUser) {
    return { id:user.id, email:user.email };
  }
}