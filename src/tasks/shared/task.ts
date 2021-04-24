import { ApiProperty } from '@nestjs/swagger';
export class Task {
    title: string;
    description: string;
    completed: boolean;
}
