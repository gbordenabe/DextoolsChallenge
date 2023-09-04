import { SetMetadata } from '@nestjs/common';
import { ROLES } from 'src/common/models';
import { ValidRoles } from '../interfaces/valid-roles';

export const RoleProtected = (...args: ValidRoles[]) => {
  return SetMetadata(ROLES.name, args);
};
