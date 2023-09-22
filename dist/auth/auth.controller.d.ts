import { AuthService } from './auth.service';
import { AuthLoginDto, AuthRegisterDto } from './dto';
import { Tokens } from './types';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: AuthRegisterDto): Promise<String>;
    login(dto: AuthLoginDto): Promise<Tokens>;
    logout(userId: number): Promise<boolean>;
    refreshTokens(userId: number, refreshToken: string): Promise<Tokens>;
}
