import { Injectable } from '@nestjs/common';
import { SimpsonsResponse } from 'src/shared/models/simpsons-response';
import { Character } from './models/character';

@Injectable()
export class CharacterService {
  getAllCharacters(): SimpsonsResponse<Character> {
    return null;
  }
}
