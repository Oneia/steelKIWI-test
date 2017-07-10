import { NgModule } from '@angular/core';

import {MdButtonModule,
        MdCheckboxModule,
        MdCardModule,
        MdListModule,
        MdIconModule,
        MdInputModule } from '@angular/material';

const ELEMENTS = [
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdCardModule,
  MdListModule,
  MdIconModule
];

@NgModule({
  imports: [... ELEMENTS],
  exports: [... ELEMENTS]
})

export class AppMaterialModule { }
