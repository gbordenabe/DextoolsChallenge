import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { CommonModule } from 'src/common/common.module';
import { MongooseModule } from '@nestjs/mongoose';
import { USER } from 'src/common/models';
import { UserSchema } from './entities/user.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: USER.name, schema: UserSchema }]), CommonModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
