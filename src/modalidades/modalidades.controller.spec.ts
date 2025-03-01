import { Test, TestingModule } from '@nestjs/testing';
import { ModalidadesController } from './modalidades.controller';
import { ModalidadesService } from './modalidades.service';

describe('ModalidadesController', () => {
  let controller: ModalidadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModalidadesController],
      providers: [ModalidadesService],
    }).compile();

    controller = module.get<ModalidadesController>(ModalidadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
