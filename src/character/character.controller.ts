import { Controller, Get } from '@nestjs/common';
import { SimpsonsResponse } from 'src/shared/models/simpsons-response';
import { Character } from './models/character';

@Controller('character')
export class CharacterController {
  @Get()
  getAllCharacters(): SimpsonsResponse<Character> {
    return null;
  }
}
