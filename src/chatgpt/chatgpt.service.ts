import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import OpenAI from "openai";

@Injectable()
export class ChatgptService {
  private readonly openai: OpenAI

  constructor(
    private prisma: PrismaService,
  ) {
    this.openai = new OpenAI();
  }

  async gpt3Response(prompt: string) {
    const completion = await this.openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system", "content": prompt}
      ],
    });
    
    console.log(completion)
    return completion.choices[0];
  }

  async gpt4Response(prompt: string) {
    const completion = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {"role": "system", "content": prompt}
      ],
    });
    
    console.log(completion)
    return completion.choices[0];
  }
}

// const response = await openai.listEngines();

// async findAllBanks(role: Role): Promise<Object> {
//   if (role == Role.ADMIN) {
//     return this.prisma.banks.findMany({
//       select: {
//         id: true,
//         name: true,
//         status: true,
//         country: true,
//       },
//     });
//   } else {
//     return this.prisma.banks.findMany({
//       where: {
//         status: {
//           notIn: [Status.DEVELOPMENT, Status.TESTING],
//         },
//       },
//       select: {
//         id: true,
//         name: true,
//         status: true,
//         country: true,
//       },
//     });
//   }
// }

// async createCredential(
//   dto: CreateCredentialsDto,
//   userId: number,
// ): Promise<CredentialResponse> {
//   const { username, password, bankId, customId } = dto;
//   const dateCreated = new Date().getTime();
//   const credentialId = uuidGenerator();
//   const usernameDecrypted = privateDecrypter(username);

//   const callbacks = await this.prisma.callbacks.findMany({
//     where: { userId },
//     select: {
//       nature: true,
//       url: true,
//     },
//   });

//   const requiredCallbacks = [
//     CallbacksNature.ACCOUNTS.toString(),
//     CallbacksNature.TRANSACTIONS.toString(),
//     CallbacksNature.NOTIFY.toString(),
//   ];

//   const multipleExist = requiredCallbacks.every((value) =>
//     callbacks.some((item) => item.nature === value),
//   );

//   if (!multipleExist) throw new NotFoundException(`Missing callback'`);

//   const bankIdExist = await this.prisma.banks.findUnique({
//     where: { id: bankId },
//   });

//   if (!bankIdExist) throw new NotFoundException(`Bank id not found'`);

//   const data = {
//     username,
//     password,
//     credentialId,
//     bankId,
//     customId,
//     callbacks,
//     userId,
//   };

//   const scrappersURL = `${process.env.APIBA_SCRAPPERS_URL}/banks/credentials`;

//   axios.post(scrappersURL, data).catch((error) => {
//     console.log('Error sending post to scrappers', error);
//     return error;
//   });

//   return {
//     id: credentialId,
//     username: usernameDecrypted,
//     dateCreated,
//   };
// }
