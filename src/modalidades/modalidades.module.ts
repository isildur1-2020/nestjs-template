import { Module } from '@nestjs/common';
import { ModalidadesService } from './modalidades.service';
import { ModalidadesController } from './modalidades.controller';

@Module({
  controllers: [ModalidadesController],
  providers: [ModalidadesService],
})
export class ModalidadesModule {}
