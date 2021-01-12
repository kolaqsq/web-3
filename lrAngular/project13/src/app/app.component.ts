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
  errorMessage: string | undefined;
  redactMode: boolean = false;
  redactID: number | undefined;
  redactWorker: Worker = {name: '', surname: '', phone: '', type: 0};

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
    this.errorMessage = '';
  }

  onChangeWorker(worker: Worker) {
    this.workers[worker.id!] = worker;
    this.workers[worker.id!].id!++;
    this.redactMode = false;
  }

  onOpenRedact(id: number) {
    this.redactID = id - 1;
    this.redactWorker = this.workers[this.redactID];
    this.redactMode = true;
  }

  onCloseRedact() {
    this.redactMode = false;
  }
}


