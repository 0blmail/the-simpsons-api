import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SimpsonsResponse } from 'src/shared/models/simpsons-response';
import { CharacterService } from './character.service';
import { Character } from './models/character';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get('/page/:pagenumber')
  async getAllCharactersByPageNumber(
    @Param('pagenumber') pagenumber: number,
  ): Promise<SimpsonsResponse<Character>> {
    return await this.characterService.getAllCharactersByPageNumber(pagenumber);
  }

  @Get(':id')
  async getCharacterById(@Param('id') id: string): Promise<Character> {
    return await this.characterService.getCharacterById(id);
  }

  @Post()
  async insertCharacter(@Body() character: Character): Promise<Character> {
    return await this.characterService.insertCharacter(character);
  }
}
