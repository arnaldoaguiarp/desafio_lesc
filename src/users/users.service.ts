import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './database/user.entity';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
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