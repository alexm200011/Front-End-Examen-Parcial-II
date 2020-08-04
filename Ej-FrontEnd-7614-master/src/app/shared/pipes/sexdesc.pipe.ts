import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexdesc'
})
export class SexdescPipe implements PipeTransform {

  transform(value: string): string {
    if(value === "M")
      return "Mujer";
    if(value === "H")
      return "Hombre";
  }

}
