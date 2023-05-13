import { Injectable } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksRepository } from './tasks.repository';


@Injectable()
export class TasksService {

  constructor(private repository: TasksRepository) {}

  async create(params: {createTaskDto: CreateTaskDto}) {
  
      const { createTaskDto } = params;
      const task = await this.repository.createTask({ data: createTaskDto })
  }


  async findAll() {
    const tasks = await this.repository.getTasks();
    return tasks;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
