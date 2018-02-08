import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { ViewListComponent } from './components/view-list/view-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const AppRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
 ];
