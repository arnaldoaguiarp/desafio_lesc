import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './database/user.entity';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
/*    
    private readonly users = [
        {
          userId: 1,
          username: 'john',
          password: 'changeme',
        },
        {
          userId: 2,
          username: 'maria',
          password: 'guess',
        },
      ];
*/    
      async findOne(username: string): Promise<UserEntity | undefined> {
        return this.userRepository.find(user => user.username === username);
      }
    
    constructor(
        @InjectRepository(UserEntity) 
        private userRepository: Repository<UserEntity>
    ) {}

    async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async getById(id: number) { 
        return await this.userRepository.findOne(id);
    }

    async create(user: User): Promise<UserEntity> {
        return await this.userRepository.save(user);
    }

    async update(id: number, user: User) {
        const user_update = await this.userRepository.findOne(id);
        this.userRepository.merge(user_update, user);
        return this.userRepository.save(user);
    }

    async delete(id: number) {
        return await this.userRepository.delete({id});
    }
}