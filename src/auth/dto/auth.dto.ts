import { IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { Role } from '@prisma/client'

export class AuthRegisterDto {
  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  @IsString()
  password: string

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role
}

export class AuthLoginDto {
  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  @IsString()
  password: string
}
