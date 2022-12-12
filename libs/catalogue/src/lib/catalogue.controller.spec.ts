import { Test } from '@nestjs/testing';
import { CatalogueController } from './catalogue.controller';
import { CatalogueService } from './catalogue.service';

describe('CatalogueController', () => {
  let controller: CatalogueController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CatalogueService],
      controllers: [CatalogueController],
    }).compile();

    controller = module.get(CatalogueController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
