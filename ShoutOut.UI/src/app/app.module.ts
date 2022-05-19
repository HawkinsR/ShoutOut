import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoutoutDetailComponent } from './shoutout-detail/shoutout-detail.component';
import { ShoutoutComponent } from './shoutout/shoutout.component';
import { ShoutoutListComponent } from './shoutout-list/shoutout-list.component';
import { CreateShoutoutComponent } from './create-shoutout/create-shoutout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoutoutDetailComponent,
    ShoutoutComponent,
    ShoutoutListComponent,
    CreateShoutoutComponent,
    NavBarComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
