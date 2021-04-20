import { ApiProperty } from '@nestjs/swagger';
export class Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}
