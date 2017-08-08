import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { MdButtonModule, MdCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { RouterComponent} from "./components/router/router.component";

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    RouterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MdButtonModule,
    MdCardModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
