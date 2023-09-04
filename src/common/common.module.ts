import { Module } from '@nestjs/common';
import { EncryptionService } from './encryption.service';
import { IsEmailService } from './isEmail.service';

@Module({
  providers: [EncryptionService, IsEmailService],
  exports: [EncryptionService, IsEmailService],
})
export class CommonModule {}
