import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateShoutoutComponent } from './create-shoutout/create-shoutout.component';
import { ShoutoutListComponent } from './shoutout-list/shoutout-list.component';
import { ShoutoutComponent } from './shoutout/shoutout.component';
import { ShoutoutDetailComponent } from './shoutout-detail/shoutout-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {path: '', component: ShoutoutComponent},
  {path: 'home', component: ShoutoutComponent}, 
  {path: 'shoutouts', component: ShoutoutListComponent},
  {path: 'create', component: CreateShoutoutComponent, canActivate: [AuthGuard]},
  {path: 'detail/:id', component: ShoutoutDetailComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
