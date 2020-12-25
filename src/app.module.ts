import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { CharacterModule } from './character/character.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${user}:${password}@localhost/simpsons-mongo`,
    ),
    SharedModule,
    CharacterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
