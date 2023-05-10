import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { SlotsModule } from './slots/slots.module';

@Module({
  imports: [TasksModule, SlotsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
