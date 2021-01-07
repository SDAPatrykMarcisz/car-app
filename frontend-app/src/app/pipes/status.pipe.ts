import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'ConvertStatusPipe'})
export class ConvertStatusPipe implements PipeTransform {
  values = {
    NEW: 'NOWY',
    IN_PROGRESS: 'W TRAKCIE',
    FINISHED: 'ZAKONCZONY',
    INTERRUPTED: 'WSTRZYMANY'
  }

  transform(value: string): string {
    return this.values[value];
  }

}
