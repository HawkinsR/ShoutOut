import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateShoutoutComponent } from './create-shoutout/create-shoutout.component';
import { ShoutoutListComponent } from './shoutout-list/shoutout-list.component';
import { ShoutoutComponent } from './shoutout/shoutout.component';
import { ShoutoutDetailComponent } from './shoutout-detail/shoutout-detail.component';

const routes: Routes = [
  {path: 'home', component: ShoutoutComponent}, 
  {path: 'shoutouts', component: ShoutoutListComponent},
  {path: 'create', component: CreateShoutoutComponent},
  {path: 'detail/:id', component: ShoutoutDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
