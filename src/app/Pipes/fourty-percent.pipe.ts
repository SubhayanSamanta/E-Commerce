import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fourtyPercent'
})
export class FourtyPercentPipe implements PipeTransform {

  transform(value: number): number {
    return value * 0.4;
  }

}
