import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from '../database/task.entity';
import { TasksModule } from '../tasks.module';
import { Task } from './task';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskEntity) 
        private taskRepository: Repository<TaskEntity>
    ) {}

    /*
    tasks: Task[] = [
        {id: 1, title: 'Tarefa 1', description:'Lorem Ipsum is simply dummy text of industry.', completed: false },
        {id: 2, title: 'Tarefa 1', description:'Lorem Ipsum is simply dummy text of industry.', completed: false },
        {id: 3, title: 'Tarefa 1', description:'Lorem Ipsum is simply dummy text of industry.', completed: false },
        {id: 4, title: 'Tarefa 1', description:'Lorem Ipsum is simply dummy text of industry.', completed: false },
        {id: 5, title: 'Tarefa 1', description:'Lorem Ipsum is simply dummy text of industry.', completed: false },
        {id: 6, title: 'Tarefa 1', description:'Lorem Ipsum is simply dummy text of industry.', completed: false },
        {id: 7, title: 'Tarefa 1', description:'Lorem Ipsum is simply dummy text of industry.', completed: false },
        {id: 8, title: 'Tarefa 1', description:'Lorem Ipsum is simply dummy text of industry.', completed: false },
        {id: 9, title: 'Tarefa 1', description:'Lorem Ipsum is simply dummy text of industry.', completed: false },
        {id: 10, title: 'Tarefa 10', description:'Lorem Ipsum is simply dummy text of industry.', completed: true },  
    ];
    */
    async getAll() {
        return await this.taskRepository.find();
    }

    async getById(id: number) { 
        return await this.taskRepository.findOne(id);
        //findByIds(ids: any[], options?: FindManyOptions<Entity>): Promise<Entity[]>;
    }
    
    async create(task: Task): Promise<TaskEntity>{
        return await this.taskRepository.save(task);
    }
    
    async update(id: number, task: Task) {
        //await this.taskRepository.update({id}, task);
        //return this.getById(id);

        const task_update = await this.taskRepository.findOne(id);
        this.taskRepository.merge(task_update, task);
        return this.taskRepository.save(task);
    }

    async delete(id: number) {
        return await this.taskRepository.delete({id});
    }
}
