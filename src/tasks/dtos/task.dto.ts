import { ApiProperty } from "@nestjs/swagger";

export class TaskDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    completed: boolean;
}