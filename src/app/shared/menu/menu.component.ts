import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {
    this.items = this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros',
          },
          {
            separator: true,
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes',
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-cog',
            routerLink: 'personalizados',
          },
        ],
      },
    ];
  }

  ngOnInit(): void {}
}
