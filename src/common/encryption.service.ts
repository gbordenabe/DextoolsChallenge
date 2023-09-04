import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class EncryptionService {
  async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    const enteredPasswordHash = crypto.createHash('sha256').update(password).digest('hex');
    return enteredPasswordHash === hashedPassword;
  }
}
