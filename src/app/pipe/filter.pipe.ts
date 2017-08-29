import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string, keyWord: string): any {
    if (!filterField || !keyWord) {
      return list;
    }
    return list.filter(
      item => {
        let filterValue = item[filterField];
        return filterValue.indexOf(keyWord) >= 0;
      }
    )
  }
}
