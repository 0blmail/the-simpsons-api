import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SimpsonsResponse } from 'src/shared/models/simpsons-response';
import { Character } from './models/character';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel('Character') private readonly characterModel: Model<Character>,
  ) {}

  getAllCharacters(): SimpsonsResponse<Character> {
    return null;
  }

  async insertCharacter(character: Character): Promise<Character> {
    const newCharacter = new this.characterModel(character);
    return await newCharacter.save();
  }
}
