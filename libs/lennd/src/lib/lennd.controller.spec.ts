import { Test } from '@nestjs/testing';
import { LenndController } from './lennd.controller';

describe('LenndController', () => {
  let controller: LenndController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [LenndController],
    }).compile();

    controller = module.get(LenndController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
