import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (filteredString === '') {
      return value;
    }
    const productsArray = [];
    for (const product of value) {
      if (product['empName'].includes(filteredString)) {
        productsArray.push(product);
      }
    }
    return productsArray;
  }

}