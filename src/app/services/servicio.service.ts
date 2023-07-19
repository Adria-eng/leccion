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
    {
      nombre: "Buenavista",
      bio: "Bus que viaja ",
      img: "assets/img/bus2.png",
      aparicion: "0.30$",
      casa:"Externo",
     
    },
    {
      nombre: "Quito",
      bio: "Bus que viaja ",
      img: "assets/img/bus4.png",
      aparicion: "15$",
      casa:"Externo",
     
    },
    {
      nombre: "Guabo",
      bio: "Bus que viaja ",
      img: "assets/img/bus2.png",
      aparicion: "7$",
      casa:"Externo",
     
    },
    {
      nombre: "Pichincha",
      bio: "Bus que viaja ",
      img: "assets/img/bus4.png",
      aparicion: "6$",
      casa:"Externo",
     
    },
    {
      nombre: "Cotopaxi",
      bio: "Bus que viaja ",
      img: "assets/img/bus.png",
      aparicion: "25$",
      casa:"Externo",
     
    },
    {
      nombre: "Santa Rosa",
      bio: "Bus que viaja ",
      img: "assets/img/bus4.png",
      aparicion: "4$",
      casa:"Externo",
     
    },
    {
      nombre: "Arenillas",
      bio: "Bus que viaja ",
      img: "assets/img/bus2.png",
      aparicion: "5$",
      casa:"Externo",
     
    },
    {
      nombre: "Huaquillas",
      bio: "Bus que viaja ",
      img: "assets/img/bus.png",
      aparicion: "7$",
      casa:"Externo",
     
    },
    {
      nombre: "Ponce",
      bio: "Bus que viaja ",
      img: "assets/img/bus2.png",
      aparicion: "5$",
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

