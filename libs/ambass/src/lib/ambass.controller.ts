import { Controller } from '@nestjs/common';
import { AmbassService } from './ambass.service';

@Controller('ambass')
export class AmbassController {
  constructor(private ambassService: AmbassService) {}
}
