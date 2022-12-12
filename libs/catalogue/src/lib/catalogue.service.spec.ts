import { Test } from '@nestjs/testing';
import { CatalogueService } from './catalogue.service';

describe('CatalogueService', () => {
  let service: CatalogueService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CatalogueService],
    }).compile();

    service = module.get(CatalogueService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
