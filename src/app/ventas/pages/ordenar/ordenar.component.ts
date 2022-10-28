import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent  {

  enMayuscula:boolean = true;
  ordenarPor:string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Thor',
      vuela: true,
      color: Color.rojo
    }
  ];

  cambiar(){
    this.enMayuscula = !this.enMayuscula;
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
  }

}
