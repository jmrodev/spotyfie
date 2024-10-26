import { Injectable } from '@nestjs/common';
import { UsuarioModel } from './usuarios.model';

@Injectable()
export class UsuariosService {
  private usuarios: UsuarioModel[] = [];

  constructor() {
    this.usuarios.push(
      { id: 1, nombre: "Juan Perez", email: "juan.perez@example.com" },
      { id: 2, nombre: "Maria Lopez", email: "maria.lopez@example.com" }
    );
  }

  create(usuario: UsuarioModel) {
    this.usuarios.push(usuario);
    return usuario;
  }

  findAll() {
    return this.usuarios;
  }

  findOne(id: number) {
    return this.usuarios.find(usuario => usuario.id === id);
  }

  update(id: number, updateUsuario: UsuarioModel) {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    if (index !== -1) {
      this.usuarios[index] = updateUsuario;
      return updateUsuario;
    }
    return null;
  }

  remove(id: number) {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    if (index !== -1) {
      return this.usuarios.splice(index, 1);
    }
    return null;
  }
}
