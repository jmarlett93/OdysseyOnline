import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { ViewListComponent } from './components/view-list/view-list.component';
import { ListService } from './services/list.service';

@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    ViewListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
