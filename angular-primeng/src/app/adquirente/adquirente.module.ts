import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';

import { AdquirenteShowComponent } from './adquirente-show/adquirente-show.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    
    ButtonModule,
    CheckboxModule,
    FieldsetModule,
    InputTextModule,
    InputMaskModule,
    TableModule,
    TabViewModule,
    TieredMenuModule,
  ],
  declarations: [AdquirenteShowComponent],
  exports: [AdquirenteShowComponent]
})
export class AdquirenteModule { }
