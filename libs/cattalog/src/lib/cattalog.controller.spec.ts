import { Test } from '@nestjs/testing';
import { CattalogController } from './cattalog.controller';

describe('CattalogController', () => {
  let controller: CattalogController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [CattalogController],
    }).compile();

    controller = module.get(CattalogController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
