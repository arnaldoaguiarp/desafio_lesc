import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { from } from 'rxjs';
import { User } from './interfaces/user.interface'
import { UsersService } from './users.service';
import { UserDto } from './dtos/user.dto';
import { UserEntity } from './database/user.entity';

@Controller('users')
export class UsersController {
    
    constructor(
        private readonly usersService: UsersService
    ) {}
 
    @Get()
    async index(): Promise<UserEntity[]> {
        return await this.usersService.findAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<UserEntity> {
        return this.usersService.getById(id);
    }

    @Post()
    @ApiBody({ type: UserDto })
    async create(@Body() user: UserDto ): Promise<UserEntity> {
        return await this.usersService.create(user);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() user: User): Promise<UserEntity> {
        return this.usersService.update(id, user);
    }

    @Delete(':id')
    async delete(@Param('id') id:number) {
        this.usersService.delete(id);
    }
}