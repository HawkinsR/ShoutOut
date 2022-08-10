import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { ShoutoutDetailComponent } from './shoutout-detail/shoutout-detail.component';
import { ShoutoutComponent } from './shoutout/shoutout.component';
import { ShoutoutListComponent } from './shoutout-list/shoutout-list.component';
import { CreateShoutoutComponent } from './create-shoutout/create-shoutout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignupButtonComponent } from './signup-button/signup-button.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoutoutDetailComponent,
    ShoutoutComponent,
    ShoutoutListComponent,
    CreateShoutoutComponent,
    NavBarComponent,
    SignupButtonComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthButtonComponent,
    ProfileComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-393-b4f1.us.auth0.com',
      clientId: 'yNSdDYxjCwE2BjDfCXNGl9taj9q86Qam'
    }),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
