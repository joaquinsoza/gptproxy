import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { ConfigModule } from '@nestjs/config'
import configuration from './config/configuration'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './common/guards'
import { ChatgptModule } from './chatgpt/chatgpt.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    ChatgptModule,
  ],
  controllers: [], // TO-DO: Add app.controller to show the health of the API (Just a @get endpoint that returns "Up and Runnning")
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
