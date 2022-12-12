import { BaseModel } from './base.model';

export class NoteTagModel extends BaseModel {
  // constructor(noteId, tagId) {
  //   super();
  //   // this.noteId = noteId;
  //   // this.tagId = tagId;
  // }
  static tableName = 'note_tags';

  noteId: number;
  tagId: number;
}
