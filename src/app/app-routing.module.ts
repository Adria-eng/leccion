import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { QuienesComponent } from './Components/quienes/quienes.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}, 
  {path: 'quienes', component: QuienesComponent}, 
  {path: '**', pathMatch:'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


