import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AddListComponent } from './add-list/add-list.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ListService } from './services/list.service';

@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    ViewListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
