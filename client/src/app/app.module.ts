/* BASE MODULES */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContactoListComponent } from './component/contacto-list/contacto-list.component';
import { ContactoFormComponent } from './component/contacto-form/contacto-form.component';
/* CONNECTION */
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
/*ANGULAR MATERIAL*/

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ContactoUpdateComponent } from './component/contacto-update/contacto-update.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactoListComponent,
    ContactoFormComponent,
    ContactoUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
