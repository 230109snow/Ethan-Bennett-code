import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ResultsComponent } from './results/results.component';
import { InfoComponent } from './info/info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
const routes: Routes = [
  { path: 'forms', component: FormComponent, },
  { path: 'results', component: ResultsComponent },
  { path: 'info', component: InfoComponent},
  {path: 'navBar', component: NavBarComponent},
  { path: '' , redirectTo: 'info', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
