import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Worker, WorkerType} from "../../shared/worker.model";

@Component({
  selector: 'app-redactform-worker',
  templateUrl: './redactform-worker.component.html',
  styleUrls: ['./redactform-worker.component.sass']
})
export class RedactformWorkerComponent implements OnInit {
  name: string | undefined;
  surname: string | undefined;
  workerType = WorkerType;

  @Input() id: number | undefined;
  @Input() type: number | undefined;
  @Input() worker: Worker = {name: '', surname: '', type: 0};
  @Input() mode: boolean | undefined;
  @Output() changeWorker = new EventEmitter<Worker>();
  @Output() closeRedact = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getType(worker: Worker) {
    return worker.type;
  }

  onChangeWorker() {
    let worker: Worker = {
      id: this.id,
      name: this.name,
      surname: this.surname,
      type: this.type,
    };
    this.changeWorker.emit(worker);
    this.id = undefined;
    this.name = undefined;
    this.surname = undefined;
    this.type = undefined;
  }

  onCloseRedact() {
    this.closeRedact.emit();
  }
}
