import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TasksComponent} from "./Pages/tasks/tasks.component";
import {SignupComponent} from "./Pages/signup/signup.component";

const routes: Routes = [
  {path:'signup', component:SignupComponent},
  {path:'tasks', component:TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
