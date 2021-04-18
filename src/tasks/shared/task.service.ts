import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
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

    getAll() {
        return this.tasks;
    }

    getById(id: number) {
        const task = this.tasks.find((value) => value.id == id); 
        return task;
    }

    create(task: Task) {
        let lastId = 0;
        if(this.tasks.length > 0) {
            lastId = this.tasks[this.tasks.length - 1].id;
        }

        task.id = lastId + 1;
        this.tasks.push(task);

        return task;
    }

    update(task: Task) {
        const taskArray = this.getById(task.id);
        if (taskArray) {
            taskArray.title = task.title;
            taskArray.description = task.description;
            taskArray.completed = task.completed;
        }

        return taskArray;
    }

    delete(id: number) {
        const index = this.tasks.findIndex((value) => value.id == id);
        this.tasks.splice(index, 1);
    }
}
