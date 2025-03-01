import { Test, TestingModule } from '@nestjs/testing';
import { ModalidadesService } from './modalidades.service';

describe('ModalidadesService', () => {
  let service: ModalidadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModalidadesService],
    }).compile();

    service = module.get<ModalidadesService>(ModalidadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
