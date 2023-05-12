import { Pipe, PipeTransform } from '@angular/core';

/*
 * miguel | toggleCase = MIGUEL
 * MIGUEL | toggleCase = miguel
 */

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    console.log({ value, toUpper });
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
