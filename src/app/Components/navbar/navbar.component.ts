import { Component,Inject } from '@angular/core';
import { ServicioService } from '../../services/servicio.service'; 
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  filtro: string = '';

  constructor(private ServicioServices:ServicioService, private router:Router) {}
  
  SearchText(dato:string) {
  this.ServicioServices.search= dato;
  console.log(this.filtro)

}
}