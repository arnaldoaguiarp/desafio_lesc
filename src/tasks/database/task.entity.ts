//import * as mongoose from 'mongoose'
import { type } from "node:os";
import { UserEntity } from "src/users/database/user.entity";
import { UsersService } from "src/users/users.service";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

//export const TaskEntity = new mongoose.Schema({...})

@Entity()
export class TaskEntity {

    @OneToMany(type => UserEntity, taskEntity => TaskEntity)
    userEntity: UserEntity;

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;
    
    @Column({ default: false })
    completed: boolean;
}