import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent{

  nombreLower:string = 'franco';
  nombreUpper:string='FRANCO';
  nombreCompleto:string='frANCo CampOSaRagna';
  fecha:Date = new Date();
}
