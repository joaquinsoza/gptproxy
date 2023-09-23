import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { ChatgptService } from './chatgpt.service'

@Controller('api')
export class ChatgptController {
  constructor(private chatgptService: ChatgptService) {}

  @Post('gpt3')
  @HttpCode(HttpStatus.OK)
  gpt3Response(@Body('prompt') prompt: string) {
    return this.chatgptService.gpt3Response(prompt)
  }

  @Post('gpt4')
  @HttpCode(HttpStatus.OK)
  gpt4Response(@Body('prompt') prompt: string) {
    return this.chatgptService.gpt4Response(prompt)
  }
}
