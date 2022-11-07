import { Model } from 'objection';

export class BaseModel extends Model {
  // constructor() {
  //   super();
  //   // this.id = id;
  // }
  readonly id: number;
}
