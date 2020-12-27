import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';
import { CharacterSchema } from './models/character';

const name = 'Character';
const schema = CharacterSchema;

@Module({
  imports: [MongooseModule.forFeature([{ name, schema }])],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
