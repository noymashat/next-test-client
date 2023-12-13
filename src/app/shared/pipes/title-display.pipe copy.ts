import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'duratiomDisplay'
})
export class DurationDisplayPipe implements PipeTransform {
  transform(duration: string): string {
    const hrIndex = duration.indexOf('h');
    const hours = duration.substring(0, hrIndex);
    const minIndex = duration.indexOf('m');
    const minutes = duration.substring(hrIndex + 1 , minIndex);
    return `${hours}h ${minutes}min`;;
  }
}
