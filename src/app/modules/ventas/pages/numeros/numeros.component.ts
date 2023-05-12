import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss'],
})
export class NumerosComponent implements OnInit {
  ventasnetas: number = 2567789.5567;
  porcentaje: number = 0.4856434;
  constructor() {}

  ngOnInit(): void {}
}
