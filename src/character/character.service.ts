import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SimpsonsHeader } from 'src/shared/models/simpsons-header';
import { SimpsonsResponse } from 'src/shared/models/simpsons-response';
import { Character } from './models/character';

@Injectable()
export class CharacterService {
  private static readonly ITEM_BY_PAGE = 40;

  constructor(
    @InjectModel('Character') private readonly characterModel: Model<Character>,
  ) {}

  async getAllCharactersByPageNumber(
    page: number,
  ): Promise<SimpsonsResponse<Character>> {
    const count = await this.characterModel.estimatedDocumentCount();
    const result = await this.characterModel
      .find()
      .skip((page - 1) * CharacterService.ITEM_BY_PAGE)
      .limit(page * CharacterService.ITEM_BY_PAGE)
      .exec();
    const header: SimpsonsHeader = {
      count,
      page,
    };
    const payload: SimpsonsResponse<Character> = {
      header,
      result,
    };
    return payload;
  }

  async getCharacterById(id: string): Promise<Character> {
    return await this.characterModel.findById(id).exec();
  }

  async insertCharacter(character: Character): Promise<Character> {
    const newCharacter = new this.characterModel(character);
    return await newCharacter.save();
  }
}
