import { Component, OnInit } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss'],
})
export class NoComunesComponent implements OnInit {
  nombre: string = 'Miguel';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Luis'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá',
  };

  heroes: any[] = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  miObservable = interval(2000).pipe(
    tap((valor) => console.log('tap: ', valor))
  );

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

  constructor() {}

  ngOnInit(): void {}

  cambiarPersona() {
    this.nombre = 'María';
    this.genero = 'femenino';
  }

  eliminarCliente() {
    if (this.clientes.length) {
      this.clientes.pop();
    }
  }
}
