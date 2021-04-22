import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task } from './shared/task';
import { TasksService } from './shared/task.service';
import { ApiBody } from '@nestjs/swagger';
import { UserDto } from 'src/users/dtos/user.dto';
import { TaskEntity } from './database/task.entity';

@Controller('tasks')
export class TasksController {

    constructor(
        private tasksService: TasksService
    ) { }

    @Get()
    async getAll() : Promise<TaskEntity[]> {
        return this.tasksService.getAll();
    }
/*
    @Get()
    async getById(@Param('id') id: number) : Promise<TaskEntity> {
        return this.tasksService.getById(id);
    }
    
    @Post()
    @ApiBody({ type: UserDto })
    async create(@Body() task: Task): Promise<TaskEntity> {
        return this.tasksService.create(task);
    }
    
    @Put(':id')
    async update(@Param('id') id: number, @Body() task: Task): Promise<TaskEntity> {
        return this.tasksService.update(id, task);
    }
*/
    @Delete(':id')
    async delete(@Param('id') id:number) {
        this.tasksService.delete(id);
    }
}
