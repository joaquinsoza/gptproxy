import { Injectable } from '@nestjs/common'
import OpenAI from 'openai'

@Injectable()
export class ChatgptService {
  private readonly openai: OpenAI

  constructor() {
    this.openai = new OpenAI()
  }

  async gpt3Response(prompt: string) {
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'system', content: prompt }],
    })

    return completion.choices[0]
  }

  async gpt4Response(prompt: string) {
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'system', content: prompt }],
    })

    return completion.choices[0]
  }
}
