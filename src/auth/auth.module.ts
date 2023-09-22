import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthStrategy, RefreshTokenStrategy } from './strategies';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthStrategy, RefreshTokenStrategy],
})
export class AuthModule {}
