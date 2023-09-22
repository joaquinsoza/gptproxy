import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { JwtPayload } from '../types';
declare const JwtAuthStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAuthStrategy extends JwtAuthStrategy_base {
    constructor(config: ConfigService);
    validate(payload: JwtPayload): JwtPayload;
}
export {};
