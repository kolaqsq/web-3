import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
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

  constructor() {
  }

  ngOnInit(): void {
  }

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

}
