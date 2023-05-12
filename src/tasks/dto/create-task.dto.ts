import { ApiProperty } from "@nestjs/swagger";
import { Timebox, Timeslot } from "@prisma/client";
import { CreateTimeboxDto } from "src/timeboxs/dto/create-timebox.dto";
import { CreateTimeslotDto } from "src/timeslots/dto/create-timeslot.dto";

export class CreateTaskDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    timeslot: CreateTimeslotDto;
    @ApiProperty()
    timebox: CreateTimeboxDto
}
