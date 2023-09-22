import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  GetCurrentUser,
  GetCurrentUserId,
  HasRoles,
  Public,
} from 'src/common/decorators';
import { RolesGuard, RefreshTokenGuard } from 'src/common/guards';
import { AuthService } from './auth.service';
import { AuthLoginDto, AuthRegisterDto } from './dto';
import { Tokens } from './types';
import { Role } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /* Sets roles for type of users 
  (To add more roles needs to update prisma user DB enum with roles) */
  @HasRoles(Role.ADMIN)
  /* Sets the guard needed when using Roles 
  (This can be set at the top level where the @Controller is but 
  in this case we need them separately because of the public ones) */
  @UseGuards(RolesGuard)
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() dto: AuthRegisterDto): Promise<String> {
    return this.authService.register(dto);
  }

  /* We are saying to the main Guard system (JWT) 
  that this endpoint is public */
  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: AuthLoginDto): Promise<Tokens> {
    return this.authService.login(dto);
  }

  /* This one is an example of a simple and protected endpoint any user 
  no matter the role can access to it but only if logged in 
  and using the access token */
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetCurrentUserId() userId: number): Promise<boolean> {
    return this.authService.logout(userId);
  }

  /* This is an exception 
  Setting the endpoint to public to then 
  guard it with another strategy */
  @Public()
  /* In this case we are changing the guard strategy 
  for the refresh token one, it should only happen here */
  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetCurrentUserId() userId: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ): Promise<Tokens> {
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
