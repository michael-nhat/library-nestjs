import { Test } from '@nestjs/testing';
import { AmbassService } from './ambass.service';

describe('AmbassService', () => {
  let service: AmbassService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AmbassService],
    }).compile();

    service = module.get(AmbassService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
