import { SetMetadata } from '@nestjs/common';
import { Role } from '@prisma/client';

export const HasRoles = (...role: Role[]) => SetMetadata('roles', role);
