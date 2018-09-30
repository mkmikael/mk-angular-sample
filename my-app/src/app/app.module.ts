import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/tabmenu';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TableModule,
    TabMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
