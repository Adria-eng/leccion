import { Component,OnInit } from '@angular/core';
import { Ruta, ServicioService } from 'src/app/services/servicio.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  heroes: Ruta[] = [];
  constructor(public _servicioService: ServicioService, private router: Router) {}

  ngOnInit(): void {
    this.heroes = this._servicioService.getHeroes();
    console.log(this.heroes)
    
  }

  verHeroe(idx:Ruta) {
    console.log(idx);
    this.router.navigate(['/ruta', this.heroes.indexOf(idx)]);
  }

}







