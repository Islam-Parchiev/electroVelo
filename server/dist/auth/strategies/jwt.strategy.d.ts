import { ConfigService } from '@nestjs/config';
import { IUser } from 'src/types/user';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly ConfigService;
    constructor(ConfigService: ConfigService);
    validate(user: IUser): Promise<{
        id: string;
        email: string;
    }>;
}
export {};
