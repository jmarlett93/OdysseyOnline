import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { ViewListComponent } from './components/view-list/view-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListService } from './services/list.service';

@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    ViewListComponent,
    HeaderComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(
      AppRoutes,
      { enableTracing: true }),
    NgbModule.forRoot()
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
