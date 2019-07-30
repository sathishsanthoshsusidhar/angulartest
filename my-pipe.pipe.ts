import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my-pipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
