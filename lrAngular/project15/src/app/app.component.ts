import {Component, OnInit} from '@angular/core';
import {Worker, WorkerType} from "./shared/models/worker.model";
import {DatabaseService} from "./shared/services/database.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'Список сотрудников';
  workers: Worker[] = [];
  workerType = WorkerType;
  redactMode: boolean = false;
  redactID: number | undefined;
  redactWorker: Worker = {name: '', surname: '', phone: '', type: 0};
  filterValue = '';

  constructor(private databaseService: DatabaseService) {
  };

  ngOnInit() {
    this.getData()
  }

  async getData() {
    try {
      this.workers = await this.databaseService.getWorkers();
    } catch (err) {
      console.log(err);
    }
  }

  grtByType(type: number) {
    return this.workers.filter((worker) =>
      worker.type === type);
  }

  async onDeleteWorker(id: number) {
    try {
      await this.databaseService.deleteWorker(id);
    } catch (err) {
      console.log(err);
    } finally {
      await this.getData();
    }
  }

  async onAddWorker(worker: Worker) {
    try {
      await this.databaseService.postWorker(worker)
    } catch (err) {
      console.log(err);
    } finally {
      await this.getData();
    }
  }

  async onRedactWorker(worker: Worker) {
    try {
      worker.id!++;
      await this.databaseService.redactWorker(worker);
      console.log(worker.id);
    } catch (err) {
      console.log(err);
    } finally {
      await this.getData();
    }
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


