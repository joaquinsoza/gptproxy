import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '.prisma/client'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor(private configService: ConfigService) {
    super({
      datasources: {
        db: {
          url: configService.get<string>('database.host'),
        },
      },
    })
  }

  async onModuleInit() {
    await this.$connect()
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }
}
