import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {

  //i12nSelect
  nombre:string = 'Franco';
  genero:string = 'masculino';

  invitacionObj = {
    'masculino': 'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes:string[] = ['Maria', "Juan", "Roberto", "Pancracio", "Axel"]
  clientesMap = {
    '=0' : 'no tenemos clientes esperando',
    '=1' : 'tenemos un cliente esperando',
    'other' : `tenemos # esperando`
  }

  cambiarCliente(){
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }

  eliminarCliente(){
    this.clientes.shift();
  }

  //keyValue pipe
  persona = {
    nombre : 'Franco',
    edad:29,
    ciudad: 'Rosario'
  }

  //async pipe
  miObservable = interval(1000);
}
