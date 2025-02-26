import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: any[], field: string, direction: string = 'asc'): any[] {
    if (!array || !field) {
      return array;
    }

   
    const sortOrder = direction === 'desc' ? -1 : 1;

    
    return array.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1 * sortOrder;
      } else if (a[field] > b[field]) {
        return 1 * sortOrder;
      } else {
        return 0;
      }
    });
  }

}
