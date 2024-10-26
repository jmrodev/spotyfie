import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { CancionesModel } from './canciones.model';

@Controller('canciones')
export class CancionesController {
  constructor(private readonly cancionesService: CancionesService) {}

  @Post()
  create(@Body() newCancion: CancionesModel) {
    return this.cancionesService.create(newCancion);
  }

  @Get()
  findAll() {
    return this.cancionesService.findAll();
  }

  @Get('titulo/:titulo')
  findByName(@Param('titulo') titulo: string) {
    return this.cancionesService.findByName(titulo);
  }

  @Get('artista/:artista')
  findByArtist(@Param('artista') artista: string) {
    return this.cancionesService.findByArtist(artista);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cancionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCancion: CancionesModel) {
    return this.cancionesService.update(+id, updateCancion);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cancionesService.remove(+id);
  }
}
