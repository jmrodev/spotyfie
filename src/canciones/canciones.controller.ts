import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { CancionesModel } from './canciones.model';

@Controller('canciones')
export class CancionesController {
  constructor(private readonly cancionesService: CancionesService) {}

  @Post()
  create(@Body() NewCancion: CancionesModel) {
    return this.cancionesService.create(NewCancion);
  }

  @Get()
  findAll() {
    return this.cancionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cancionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateCancion: CancionesModel) {
    return this.cancionesService.update(+id, UpdateCancion);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cancionesService.remove(+id);
  }
}
