import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TableWorkersComponent} from './ui/table-workers/table-workers.component';
import {AddformWorkerComponent} from './ui/addform-worker/addform-worker.component';
import {FormsModule} from "@angular/forms";
import {RedactformWorkerComponent} from './ui/redactform-worker/redactform-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    TableWorkersComponent,
    AddformWorkerComponent,
    RedactformWorkerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
