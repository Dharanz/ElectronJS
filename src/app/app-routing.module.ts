import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimplemathComponent } from './simplemath/simplemath.component';


const routes: Routes = [
  { path: "", component: SimplemathComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
