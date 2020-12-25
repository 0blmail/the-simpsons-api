import { SimpsonsHeader } from './simpsons-header';

export class SimpsonsResponse<T> {
  header: SimpsonsHeader;
  result: T[];
}
