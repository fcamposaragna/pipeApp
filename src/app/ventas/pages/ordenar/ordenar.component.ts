import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent  {

  enMayuscula:boolean = true;

  cambiar(){
    this.enMayuscula = !this.enMayuscula;
  }

}
