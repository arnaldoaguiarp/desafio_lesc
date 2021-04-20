import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { from } from 'rxjs';
import { User } from './interfaces/user.interface'
import { UsersService } from './users.service';
import { UserDto } from './dtos/user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    

    @Get()
    index(): User[] {
        return this.usersService.findAll();
    }

    @Post()
    @ApiBody({ type: UserDto })
    create(@Body() user: User): User {
        return this.usersService.create(user);
    }
}
