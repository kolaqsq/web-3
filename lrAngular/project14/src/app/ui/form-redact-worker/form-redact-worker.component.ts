import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Worker, WorkerType} from "../../shared/models/worker.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-redact-worker',
  templateUrl: './form-redact-worker.component.html',
  styleUrls: ['./form-redact-worker.component.sass']
})
export class FormRedactWorkerComponent implements OnInit {
  name: string | undefined;
  surname: string | undefined;
  phone: string | undefined;
  type = 0;
  workerType = WorkerType;
  phoneMask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  formRedact: FormGroup = new FormGroup({
    'name': new FormControl('', Validators.required),
    'surname': new FormControl('', Validators.required),
    'phone': new FormControl('', Validators.pattern('\\+7 \\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}')),
    'type': new FormControl(this.workerType.programmer, Validators.required),
  });

  @Input() id: number | undefined;
  @Input() mode: boolean | undefined;
  @Input() worker: Worker = {name: '', surname: '', phone: '', type: 0};
  @Output() changeWorker = new EventEmitter<Worker>();
  @Output() closeRedact = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onRedactWorker() {
    let worker: Worker = {
      id: this.id,
      name: this.formRedact.controls['name'].value,
      surname: this.formRedact.controls['surname'].value,
      phone: this.formRedact.controls['phone'].value,
      type: this.formRedact.controls['type'].value,
    };
    this.changeWorker.emit(worker);
  }

  onCloseRedact() {
    this.closeRedact.emit();
  }

  clear() {
    this.id = undefined;
    this.name = '';
    this.surname = '';
    this.phone = '';
    this.type = 0;
  }
}
