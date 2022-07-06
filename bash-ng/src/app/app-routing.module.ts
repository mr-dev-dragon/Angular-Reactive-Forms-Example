

import { NgModule, Component } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'R-F',
    component: ReactiveFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
