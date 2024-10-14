import { Injectable } from '@nestjs/common';
import { CancionesModel } from './canciones.model';

@Injectable()
export class CancionesService {
  create(cancion:CancionesModel) {
    return 'This action adds a new cancione';
  }

  findAll() {
    return `This action returns all canciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cancione`;
  }

  update(id: number, updateCancion:CancionesModel) {
    return `This action updates a #${id} cancione`;
  }

  remove(id: number) {
    return `This action removes a #${id} cancione`;
  }
}
