import { PrismaService } from 'src/prisma/prisma.service';
import { AuthLoginDto, AuthRegisterDto } from './dto';
import { Tokens } from './types';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private prisma;
    private jwtService;
    private config;
    constructor(prisma: PrismaService, jwtService: JwtService, config: ConfigService);
    register(dto: AuthRegisterDto): Promise<String>;
    login(dto: AuthLoginDto): Promise<Tokens>;
    logout(userId: number): Promise<boolean>;
    refreshTokens(userId: number, rt: string): Promise<Tokens>;
    updateRtHash(userId: number, rt: string): Promise<void>;
    hashData(data: string): Promise<string>;
    getTokens(userId: number, email: string, role: string): Promise<Tokens>;
}
