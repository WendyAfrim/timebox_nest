import { ApiProperty } from "@nestjs/swagger";
import { CreateTimeboxDto } from "src/timeboxs/dto/create-timebox.dto"; 


export class CreateTaskDto {
    @ApiProperty()
    title: string;
    timeslot: null;
    @ApiProperty({ type: () => CreateTimeboxDto })
    timebox: null;
    @ApiProperty()
    createdBy: string;
}
