import { BaseModel } from './base.model';
import { ThemeModel } from './theme.model';
import { TagModel } from './tag.model';
import { Model } from 'objection';

export class NoteModel extends BaseModel {
  // constructor(text, themeId, theme, tags) {
  //   super();
  //   // this.text = text;
  //   // this.themeId = themeId;
  //   // this.theme = theme ;
  //   // this.tags = tags;
  // }
  static tableName = 'notes';

  text: string;
  themeId: number;

  theme: ThemeModel;
  tags: TagModel[];

  static relationMappings = {
    theme: {
      modelClass: `${__dirname}/theme.model`,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'notes.themeId',
        to: 'themes.id'
      }
    },
    tags: {
      modelClass: `${__dirname}/tag.model`,
      relation: Model.ManyToManyRelation,
      join: {
        from: 'notes.id',
        through: {
          from: 'note_tags.noteId',
          to: 'note_tags.tagId'
        },
        to: 'tags.id'
      }
    }
  };
}
