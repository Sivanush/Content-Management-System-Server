/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { authenticationResponse, commonResponse } from './interface/user.interface';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post('signup')
    async signup(@Body() user: CreateUserDto): Promise<authenticationResponse> {
        const userData = await this.userService.signup(user);
        return await this.userService.generateToken(userData)
    }

    @Post('login')
    async login(@Body() user:LoginUserDto): Promise<authenticationResponse> {
        const userData = await this.userService.login(user);
        return await this.userService.generateToken(userData) 
    }


}
