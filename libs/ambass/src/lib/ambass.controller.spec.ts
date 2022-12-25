import { Test } from '@nestjs/testing';
import { AmbassController } from './ambass.controller';
import { AmbassService } from './ambass.service';

describe('AmbassController', () => {
  let controller: AmbassController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AmbassService],
      controllers: [AmbassController],
    }).compile();

    controller = module.get(AmbassController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
