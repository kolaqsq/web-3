import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Worker} from "../../shared/worker.model";

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.sass']
})
export class TableWorkersComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() workers: Worker[] = [];
  @Output() deleteWorker = new EventEmitter<number>();
  @Output() openRedact = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDeleteWorker(id: number | undefined) {
    this.deleteWorker.emit(id);
  }

  onOpenRedact(id: number | undefined) {
    this.openRedact.emit(id);
  }
}
