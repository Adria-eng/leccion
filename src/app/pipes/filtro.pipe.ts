import { Pipe, PipeTransform } from '@angular/core';
import { Ruta, ServicioService } from '../services/servicio.service';



@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(heroes: Ruta[], searchText: string): Ruta[] {
    if (!heroes) {
      return [];
    }
    if (!searchText) {
      return heroes;
    }
    searchText = searchText.toLowerCase();
    return heroes.filter(heroe => {
      return (
        heroe.nombre.toLowerCase().includes(searchText) 
      );
    });
  }
}

