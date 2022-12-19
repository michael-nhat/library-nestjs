import { BaseModel } from './base.model';

export class ThemeModel extends BaseModel {
  // constructor(name, fontFamily, fontSize, background, foreground ) {
  //   super();
  //   // this.name = name;
  //   // this.fontFamily = fontFamily;
  //   // this.fontSize = fontSize;
  //   // this.background = background;
  //   // this.foreground = foreground;
  // }
  static tableName = 'themes';

  name: string;
  fontFamily: string;
  fontSize: number;
  background: string;
  foreground: string;
}
