import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  nombre: string = 'miguel chinchay';
  valor: number = 1000;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  cambiarNombre(): void {
    console.log(this.nombre);
  }
}
