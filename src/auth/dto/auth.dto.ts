import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { Role } from '@prisma/client'

export class AuthRegisterDto {
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role
}

export class AuthLoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string
}
