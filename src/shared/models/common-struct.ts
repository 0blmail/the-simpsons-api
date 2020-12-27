import * as mongoose from 'mongoose';

export interface CommonStruct extends mongoose.Document {
  _id: number;
  name: string;
  image: string;
  created: Date;
}
