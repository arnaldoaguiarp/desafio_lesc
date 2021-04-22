//import * as mongoose from 'mongoose'
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//export const TaskEntity = new mongoose.Schema({...})

@Entity()
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;
    
    @Column()
    completed: boolean;
}