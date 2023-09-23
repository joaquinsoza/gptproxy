import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import configuration from './config/configuration'
import { ChatgptModule } from './chatgpt/chatgpt.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    ChatgptModule,
  ],
  controllers: [], // TO-DO: Add app.controller to show the health of the API (Just a @get endpoint that returns "Up and Runnning")
})
export class AppModule {}
