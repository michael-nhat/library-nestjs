import { Controller, Get } from '@nestjs/common';
import { CatalogueService } from './catalogue.service';

@Controller('catalogue')
export class CatalogueController {
  constructor(private catalogueService: CatalogueService) {}
  @Get()
  findAll() {
    return "findAll";
  }
}
