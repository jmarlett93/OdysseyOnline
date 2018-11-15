import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserComponent } from './components/user/user.component';
import { SignInComponent } from './components/signin/sign-in.component';
import { UserService } from './services/user.service';
import { GoogleOauthService } from './services/google-oauth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    UserComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
      RouterModule.forRoot(
      AppRoutes,
      { enableTracing: true }),
      FormsModule
  ],
  providers: [UserService, GoogleOauthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
