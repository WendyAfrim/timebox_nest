import { CreateTaskDto } from './create-task.dto';
declare const UpdateTaskDto_base: import("@nestjs/common").Type<Omit<CreateTaskDto, "createdBy" | "timebox" | "timeslot">>;
export declare class UpdateTaskDto extends UpdateTaskDto_base {
}
export {};
