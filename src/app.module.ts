import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CancionesModule } from './canciones/canciones.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [CancionesModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
