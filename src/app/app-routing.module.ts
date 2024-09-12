import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GarageListComponent } from './components/garage-list/garage-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/garages', pathMatch: 'full' }, 
  { path: 'garages', component: GarageListComponent },      
  { path: '**', redirectTo: '/garages' }                    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
