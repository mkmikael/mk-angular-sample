import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdquirenteModule } from './adquirente/adquirente.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdquirenteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
