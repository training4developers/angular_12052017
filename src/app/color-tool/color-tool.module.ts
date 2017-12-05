import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { ColorHomeComponent } from './components/color-home/color-home.component';

@NgModule({
  imports: [
    CommonModule, HttpClientModule,
  ],
  declarations: [ColorHomeComponent],
  exports: [ColorHomeComponent],
})
export class ColorToolModule { }
