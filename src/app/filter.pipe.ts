import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  // ce vreau sa filtrez
  // @ts-ignore
  transform(value: any[], filterString: string, propName: string): any[] {
    const result: any = [];
    if (!value || filterString === '' || propName === "") {
      return value;
    }
   value.forEach((el:any)=>{
     if (el[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
       result.push(el)
     }
     console.log(result)
     return result;
   })
  }

}
