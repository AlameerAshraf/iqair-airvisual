import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { join } from 'path';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DB_URL,
      // entities: [__dirname + '/../**/*.entity.{js,ts}'],
      autoLoadEntities: true,
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
  }),
    ApiModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
  ],
})
// implements NestModule
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
  }
}
