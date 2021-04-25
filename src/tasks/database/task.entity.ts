//import * as mongoose from 'mongoose'
import { type } from "node:os";
import { UserEntity } from "src/users/database/user.entity";
import { UsersService } from "src/users/users.service";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

//export const TaskEntity = new mongoose.Schema({...})

@Entity()
export class TaskEntity {

    @ManyToOne(type => UserEntity, taskEntity => TaskEntity, {eager: true})
    userEntity: UserEntity;

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;
    
    @Column({ default: false })
    completed: boolean;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}