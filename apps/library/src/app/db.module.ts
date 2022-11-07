import { ObjectionModule } from "@willsoto/nestjs-objection";
import { Module } from "@nestjs/common";
import knex from "knex";
import { knexSnakeCaseMappers } from "objection";
import { NoteModel } from "./models/note.model";
import { TagModel } from "./models/tag.model";

@Module({
  imports: [
    ObjectionModule.register({
      // You can specify a custom BaseModel
      // If none is provided, the default Model will be used
      // https://vincit.github.io/objection.js/#models
      // Model: BaseModel,
      config: {
        client: "postgres",
        useNullAsDefault: true,
        connection: {
          // filename: "./example.sqlite",
          database:  process.env.DB_NNAME,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          host: process.env.DB_HOST,
          port: 5432,
          ssl: false,
        },
      },
    }),

    //Register your objection models so it can be provided when needed.
    ObjectionModule.forFeature([NoteModel, TagModel]),
  ],
  exports: [ObjectionModule],
})
export class DbModule {}
