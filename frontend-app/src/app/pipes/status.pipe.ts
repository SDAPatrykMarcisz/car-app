import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'ConvertStatusPipe'})
export class ConvertStatusPipe implements PipeTransform {
  values = {
    NEW: 'nowy',
    IN_PROGRESS: 'w trakcie',
    FINISHED: 'zakończony',
    INTERRUPTED: 'wstrzymany'
  }

  transform(value: string): string {
    return this.values[value];
  }

}
