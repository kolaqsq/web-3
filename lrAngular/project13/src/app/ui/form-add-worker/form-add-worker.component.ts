import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Worker, WorkerType} from "../../shared/worker.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-add-worker',
  templateUrl: './form-add-worker.component.html',
  styleUrls: ['./form-add-worker.component.sass']
})
export class FormAddWorkerComponent implements OnInit {
  name: string | undefined;
  surname: string | undefined;
  phone: string | undefined;
  type = 0;
  workerType = WorkerType;
  phoneMask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  formAdd: FormGroup = new FormGroup({
    'name': new FormControl('', Validators.required),
    'surname': new FormControl('', Validators.required),
    'phone': new FormControl('', Validators.pattern('\\+7 \\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}')),
    'type': new FormControl(this.workerType.programmer, Validators.required),
  });

  @Output() addWorker = new EventEmitter<Worker>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddWorker() {
    let worker: Worker = {
      name: this.formAdd.controls['name'].value,
      surname: this.formAdd.controls['surname'].value,
      phone: this.formAdd.controls['phone'].value,
      type: this.formAdd.controls['type'].value,
    };
    this.addWorker.emit(worker);
  }

  clear() {
    this.name = '';
    this.surname = '';
    this.phone = '';
    this.type = 0;
  }
}
