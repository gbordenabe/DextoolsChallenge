import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserService } from 'src/user/user.service';
import { EncryptionService } from 'src/common/encryption.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly encryptionService: EncryptionService,
    private readonly jwtService: JwtService
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userService.findOneByUsernameOrEmail(loginDto.usernameOrEmail);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isCorrectPassword = await this.encryptionService.comparePasswords(
      loginDto.password,
      user.password
    );

    if (!isCorrectPassword) {
      throw new UnauthorizedException('Wrong password');
    }

    if (user.role !== 'admin' || user.active === false) {
      throw new UnauthorizedException('User not allowed');
    }

    return {
      token: this.getJwtToken({
        username: user.username,
        email: user.email,
        role: user.role,
      }),
    };
  }

  private getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
