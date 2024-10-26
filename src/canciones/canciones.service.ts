import { Injectable } from '@nestjs/common';
import { CancionesModel } from './canciones.model';

@Injectable()
export class CancionesService {
  private canciones: CancionesModel[] = [];

  constructor() {
    this.canciones.push(
      { id: 1, titulo: "Despacito", artista: "Luis Fonsi", album: "Vida", anio: 2017, genero: "Reggaeton" },
      { id: 2, titulo: "Shape of You", artista: "Ed Sheeran", album: "Divide", anio: 2017, genero: "Pop" },
      { id: 3, titulo: "Blinding Lights", artista: "The Weeknd", album: "After Hours", anio: 2020, genero: "Synthwave" }
    );
  }

  create(cancion: CancionesModel) {
    this.canciones.push(cancion);
    return cancion;
  }

  findAll() {
    return this.canciones;
  }

  findByName(titulo: string) {
    return this.canciones.filter(cancion => cancion.titulo === titulo);
  }

  findByArtist(artista: string) {
    return this.canciones.filter(cancion => cancion.artista === artista);
  }

  findOne(id: number) {
    return this.canciones.find(cancion => cancion.id === id);
  }

  update(id: number, updateCancion: CancionesModel) {
    const index = this.canciones.findIndex(cancion => cancion.id === id);
    if (index !== -1) {
      this.canciones[index] = updateCancion;
      return updateCancion;
    }
    return null;
  }

  remove(id: number) {
    const index = this.canciones.findIndex(cancion => cancion.id === id);
    if (index !== -1) {
      return this.canciones.splice(index, 1);
    }
    return null;
  }
}
