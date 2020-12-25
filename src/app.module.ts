import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${user}:${password}@localhost/simpsons-mongo`,
    ),
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
