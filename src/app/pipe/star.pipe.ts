import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star',
  standalone: true
})
export class StarPipe implements PipeTransform {

  transform(value: number, max:number=5): string {
     let filledStars = '★'.repeat(value); 
      let emptyStars = '☆'.repeat(max - value); 
      return filledStars +emptyStars;
  }

}
