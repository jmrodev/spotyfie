import { Injectable } from '@nestjs/common';
import { UsuariosModel } from './usuarios.model';


@Injectable()
export class UsuariosService {
  create(usuario:UsuariosModel) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuario:UsuariosModel) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
