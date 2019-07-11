import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import {FormsModule} from '@angular/forms';
import {AutofocusModule} from 'angular-autofocus-fix';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AutofocusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
