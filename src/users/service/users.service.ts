import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '../model/user.model';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async signup(userData: CreateUserDto): Promise<User> {
    const { username, email, password } = userData;

    const existingUser = await this.userModel.findOne({ email });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new this.userModel({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    return user;
  }

  async generateToken(user: User) {
    const payload = { email: user.email, userId: user._id };
    return {
      token: this.jwtService.sign(payload),
      user: {
        email: user.email,
        username: user.username,
      },
    };
  }

  async login(userData: CreateUserDto): Promise<User> {
    const { email, password } = userData;

    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      throw new BadRequestException('Invalid credentials');
    }

    return user;
  }
}
