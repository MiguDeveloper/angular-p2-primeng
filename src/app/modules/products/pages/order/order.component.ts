import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  istoUpper: boolean = false;
  sortBy: keyof Hero | '' = '';

  heroes: Hero[] = [
    {
      name: 'Superman',
      canfly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canfly: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      canfly: false,
      color: Color.green,
    },
    {
      name: 'Daredevil',
      canfly: false,
      color: Color.red,
    },
    {
      name: 'Linterna verde',
      canfly: true,
      color: Color.green,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleToUppercase() {
    this.istoUpper = !this.istoUpper;
  }

  toggleSortBy(sortBy: keyof Hero | '') {
    this.sortBy = sortBy;
  }
}
