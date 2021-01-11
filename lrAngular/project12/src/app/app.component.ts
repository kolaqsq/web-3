import {Component} from '@angular/core';
import {Worker, WorkerDatabase, WorkerType} from "./shared/worker.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'Список сотрудников';
  workers: Worker[] = WorkerDatabase;
  workerType = WorkerType;

  grtByType(type: number) {
    return this.workers.filter((worker) =>
      worker.type === type);
  }

  onDeleteWorker(id: number) {
    let index = this.workers.findIndex((worker) =>
      worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }

  onAddWorker(worker: Worker) {
    worker.id = this.workers.length > 0
      ? this.workers[this.workers.length - 1].id! + 1
      : 0;
    this.workers.push(worker);
  }
}
