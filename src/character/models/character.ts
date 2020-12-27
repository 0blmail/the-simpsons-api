import { CommonStruct } from 'src/shared/models/common-struct';
import * as mongoose from 'mongoose';

export const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: false },
  created: { type: Date, required: true },
  gender: { type: String, required: false },
  status: { type: String, required: true },
});

export interface Character extends CommonStruct {
  gender: string;
  status: string;
}
