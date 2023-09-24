import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
  // KEYS
  private apiKeys: string = process.env.APIKEY
  validateApiKey(apiK: string) {
    return this.apiKeys == apiK
  }
}
