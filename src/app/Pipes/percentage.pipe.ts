import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(value: number, deduct: number): number {
    let data = (value * deduct) / 100
    return data;
  }

}
