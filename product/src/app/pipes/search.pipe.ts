import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../entity/product';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: any[], searchString:string): any[] {
    console.log(values);
    console.log(searchString);
    if(!searchString || !values){
      return values;
      
    }
    searchString = searchString.toLocaleLowerCase();
      
    

    return values.filter(p=>p.productName.toLocaleLowerCase().includes(searchString));
  }

}
