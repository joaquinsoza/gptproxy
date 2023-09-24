import { MiddlewareConsumer, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import configuration from './config/configuration'
import { ChatgptModule } from './chatgpt/chatgpt.module'
import { AuthModule } from './auth/auth.module'
import { AuthMiddleware } from './middleware/auth/auth.middleware'
import { AppController } from './APP.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    ChatgptModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('')
  }
}
