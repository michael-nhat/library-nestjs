import { ensure, isNumber, TinyTypeOf } from "tiny-types";


export class Year extends TinyTypeOf<number>() {
  constructor(year: number){
    super(year);
    ensure('Year', isNumber())
  }
}
