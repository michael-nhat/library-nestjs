import { Controller } from '@nestjs/common';
import { CatalogueService } from './catalogue.service';

@Controller('catalogue')
export class CatalogueController {
  constructor(private catalogueService: CatalogueService) {}
}
