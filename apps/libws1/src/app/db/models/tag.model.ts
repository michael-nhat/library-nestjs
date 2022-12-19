import { BaseModel } from './base.model';

export class TagModel extends BaseModel {
  // constructor(name) {
  //   super();
  //   // this.name = name;
  // }
  static tableName = 'tags';

  name: string;
}
