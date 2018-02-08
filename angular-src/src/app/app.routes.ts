import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserComponent } from './components/user/user.component';

export const AppRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {path: 'user', component: UserComponent}
 ];
