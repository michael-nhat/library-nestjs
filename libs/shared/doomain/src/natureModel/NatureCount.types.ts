import { ensure, isNumber, TinyTypeOf } from "tiny-types";


export class NatureCount extends TinyTypeOf<number>() {
  constructor(count: number){
    super(count);
    ensure('NatureNumber', isNumber())
  }
}
