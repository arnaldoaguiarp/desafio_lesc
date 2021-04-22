import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './shared/task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './database/task.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity]),
    TasksModule
  ],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
