import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent {
  heroe:any={};
  constructor(private activatedRoute: ActivatedRoute, private _servicioService:ServicioService){
    this.activatedRoute.params.subscribe(params =>{
      this.heroe= _servicioService.getHeroe(params['id']);
      console.log(this.heroe);
    })
}

}
