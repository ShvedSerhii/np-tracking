import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(documents: any, searchText: any): any {
    if (!searchText) {
      return documents;
    }
    return documents.filter( document => document.Number.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    );
  }
}
