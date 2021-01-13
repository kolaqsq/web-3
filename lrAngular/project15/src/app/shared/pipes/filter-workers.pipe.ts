import {Pipe, PipeTransform} from '@angular/core';
import {Worker} from "../models/worker.model";

@Pipe({
  name: 'filterWorkers'
})
export class FilterWorkersPipe implements PipeTransform {

  transform(workers: Worker[], filterValue: string): Worker[] {
    if (filterValue === '') {
      return workers;
    } else {
      return workers.filter(
        (worker) =>
          worker.name!.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
      ).concat(workers.filter(
        (worker) =>
          worker.surname!.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
        )
      );
    }
  }

}
