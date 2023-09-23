import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common'
import { Role } from '@prisma/client'
import { HasRoles } from 'src/common/decorators'
import { RolesGuard } from 'src/common/guards'
import { ChatgptService } from './chatgpt.service'

@HasRoles(Role.USER)
@UseGuards(RolesGuard)
@Controller('api')
export class ChatgptController {
  constructor(private chatgptService: ChatgptService) {}

  @Post('gpt3')
  @HttpCode(HttpStatus.OK)
  gpt3Response(@Body('prompt') prompt: string) {
    return this.chatgptService
      .gpt3Response(prompt)
  }

  @Post('gpt4')
  @HttpCode(HttpStatus.OK)
  gpt4Response(@Body('prompt') prompt: string) {
    return this.chatgptService
      .gpt4Response(prompt)
  }
}