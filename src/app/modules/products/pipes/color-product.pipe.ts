import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'colorProduct',
})
export class ColorProductPipe implements PipeTransform {
  transform(value: number): string {
    const colors = Object.keys(Color).filter((key) => isNaN(Number(key)));
    return colors[value];
  }
}
