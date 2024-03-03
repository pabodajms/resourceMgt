import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './button/button.component';
import { AddFormComponent } from './add-form/add-form.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'button', component: ButtonComponent},
  { path: 'add-form', component: AddFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FirstViewComponent,
    ButtonComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
