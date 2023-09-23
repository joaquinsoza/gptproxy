import { Module } from '@nestjs/common'
import { ChatgptController } from './chatgpt.controller'
import { ChatgptService } from './chatgpt.service'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [HttpModule],
  controllers: [ChatgptController],
  providers: [ChatgptService],
  exports: [ChatgptService],
})
export class ChatgptModule {}
