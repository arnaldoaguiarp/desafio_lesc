import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { from } from 'rxjs';
import { User } from './interfaces/user.interface'
import { UsersService } from './users.service';
import { UserDto } from './dtos/user.dto';
import { UserEntity } from './database/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    @Get()
    async index(): Promise<UserEntity[]> {
        return await this.usersService.findAll();
    }
/*
    @Get(':id')
    async find(@Param('id') id: number): Promise<UserEntity> {
        return this.usersService.findAll();
    }
*/
    @Post()
    @ApiBody({ type: UserDto })
    async create(@Body() user: UserDto ): Promise<UserEntity> {
        return await this.usersService.create(user);
    }
}
