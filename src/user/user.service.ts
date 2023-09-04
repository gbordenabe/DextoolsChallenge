import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { USER } from 'src/common/models';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { IsEmailService } from 'src/common/isEmail.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(USER.name) private userModel: Model<User>,
    private readonly isEmailService: IsEmailService
  ) {}

  async findOneByUsernameOrEmail(usernameOrEmail: string) {
    try {
      const user = await this.userModel.findOne(
        this.isEmailService.isEmail(usernameOrEmail)
          ? { email: usernameOrEmail }
          : { username: usernameOrEmail }
      );
      return user;
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
