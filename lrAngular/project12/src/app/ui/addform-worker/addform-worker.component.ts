import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Worker, WorkerType} from "../../shared/worker.model";

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.sass']
})
export class AddformWorkerComponent implements OnInit {

  name: string | undefined;
  surname: string | undefined;
  type = 0;
  workerType = WorkerType;

  @Output() addWorker = new EventEmitter<Worker>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddWorker() {
    let worker: Worker = {
      name: this.name,
      surname: this.surname,
      type: this.type,
    };
    this.addWorker.emit(worker);
  }
}
