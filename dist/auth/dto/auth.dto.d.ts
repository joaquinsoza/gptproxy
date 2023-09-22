import { Role } from '@prisma/client';
export declare class AuthRegisterDto {
    email: string;
    password: string;
    role: Role;
}
export declare class AuthLoginDto {
    email: string;
    password: string;
}
