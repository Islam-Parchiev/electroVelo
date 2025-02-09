import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

interface JwtPayload { 
  id: number;
  email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload:JwtPayload) { 
    let configS = new ConfigService();
    console.log("jwt.strategy.ts 23:",configS.get('JWT_SECRET'));
    console.log("jwt.strategy.ts 24:", payload);
    return {email:payload.email,test:"test2",id:payload.id}; 
  }
}