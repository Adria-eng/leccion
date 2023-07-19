import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  search: string = '';
  private heroes:Ruta[]=[
    {
      nombre: "Pasaje",
      bio: "Bus que viaja ",
      img: "assets/img/bus.png",
      aparicion: "20$",
      casa:"Externo",
     
    },
   
    
  ];
  imagenes: File[] = [];
  

  getHeroes()
  {
    return this.heroes;
  }
  agregarHeroe(heroe: Ruta, imagen: File) {
    this.heroes.push(heroe);
  
    // Genera una URL para la imagen y asígnala al héroe
    const imgUrl = URL.createObjectURL(imagen);
    heroe.img = imgUrl;
  
    // Guarda la imagen en la propiedad imagenes del servicio
    this.imagenes.push(imagen);
  }
  
  
  
  getHeroe(idx: number):Ruta{
    return this.heroes[idx];
  }

  constructor() { }
}



export interface Ruta{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;



}

