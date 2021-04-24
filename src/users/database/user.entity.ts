import { TaskEntity } from "src/tasks/database/task.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    
    @ManyToOne(type => TaskEntity, taskEntity => TaskEntity)
    @JoinColumn()
    taskEntity: TaskEntity;
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    phone: string;
    
    @Column()
    password: string;
}