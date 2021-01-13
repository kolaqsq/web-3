import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WorkersRoutingModule} from './workers-routing.module';
import {WorkersComponent} from './workers.component';
import {WorkerListComponent} from './worker-list/worker-list.component';
import {WorkerEditComponent} from './worker-edit/worker-edit.component';
import {HttpClientModule} from "@angular/common/http";
import {FilterWorkersPipe} from './shared/pipes/filter-workers.pipe';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [WorkersComponent, WorkerListComponent, WorkerEditComponent, FilterWorkersPipe],
  imports: [
    CommonModule,
    WorkersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class WorkersModule {
}
