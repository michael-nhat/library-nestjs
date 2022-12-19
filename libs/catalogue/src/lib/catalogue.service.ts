import { Injectable } from '@nestjs/common';

@Injectable()
export class CatalogueService {}

export type BookStatus = "achived" | "activated" | "pending"