import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramSelectionComponent } from './features/program-selection/program-selection.component';

const routes: Routes = [
  {
    path  : "home",
    component : ProgramSelectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
