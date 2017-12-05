import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ColorsService } from './services/colors.service';
import { ColorHomeComponent } from './components/color-home/color-home.component';

@NgModule({
  imports: [
    CommonModule, HttpClientModule,
  ],
  declarations: [ColorHomeComponent],
  // makes component available for use in templates outside the module
  exports: [ColorHomeComponent],
  // makes the services available for injecting (in this case injecting into a component)
  providers: [ColorsService],
})
export class ColorToolModule { }
