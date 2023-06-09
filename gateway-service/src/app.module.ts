import {Module} from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices'
import {LoggerModule as PinoLoggerModule} from "nestjs-pino";
import {join} from 'path';
import {UsersController} from "./users/users.controller";
import {UsersModule} from "./users/users.module";
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
      PinoLoggerModule.forRoot({
          pinoHttp: {
              transport: {
                  target: 'pino-pretty',
                  options: {
                      singleLine: true
                  }
              }
          }
      }),
      UsersModule,
      AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
