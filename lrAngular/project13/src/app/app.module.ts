import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TableWorkersComponent} from './ui/table-workers/table-workers.component';
import {FormAddWorkerComponent} from './ui/form-add-worker/form-add-worker.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormRedactWorkerComponent} from './ui/form-redact-worker/form-redact-worker.component';

import {TextMaskModule} from 'angular2-text-mask';


@NgModule({
  declarations: [
    AppComponent,
    TableWorkersComponent,
    FormAddWorkerComponent,
    FormRedactWorkerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
