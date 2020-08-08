import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, data: { id: 'home', name: 'Home' } },
  { path: 'about', component: AboutComponent, data: { id: 'about', name: 'About' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
