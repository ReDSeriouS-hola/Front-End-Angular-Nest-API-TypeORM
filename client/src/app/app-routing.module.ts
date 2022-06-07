import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoListComponent } from "./component/contacto-list/contacto-list.component";
import { ContactoFormComponent } from "./component/contacto-form/contacto-form.component";
import { ContactoUpdateComponent } from './component/contacto-update/contacto-update.component';
const routes: Routes = [

  {
    path:'',
    component: ContactoListComponent
  },
  {
    path:'contacto',
    component: ContactoListComponent
  },
  {
    path:'contacto/create',
    component: ContactoFormComponent
  },
  {
    path:'contacto/edit/:id',
    component: ContactoUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
