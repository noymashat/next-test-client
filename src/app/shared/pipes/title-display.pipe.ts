import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'titleDisplay'
})
export class TitleDisplayPipe implements PipeTransform {
  transform(title: string): string {
    return title.length > 25 ? title.substring(0, 25) + '...' : title;
  }
}
