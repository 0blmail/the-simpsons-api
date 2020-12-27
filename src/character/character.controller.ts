import { Body, Controller, Get, Post } from '@nestjs/common';
import { SimpsonsResponse } from 'src/shared/models/simpsons-response';
import { CharacterService } from './character.service';
import { Character } from './models/character';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  getAllCharacters(): SimpsonsResponse<Character> {
    return null;
  }

  @Post()
  async insertCharacter(@Body() character: Character): Promise<Character> {
    return await this.characterService.insertCharacter(character);
  }
}
