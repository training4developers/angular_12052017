import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ColorsService } from './services/colors.service';
import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorTableComponent } from './components/color-table/color-table.component';
import { ColorTableWrapperComponent } from './components/color-table-wrapper/color-table-wrapper.component';
import { ColorFormComponent } from './components/color-form/color-form.component';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, ReactiveFormsModule,
  ],
  // makes component available for use in templates within the module
  declarations: [ColorHomeComponent, ColorTableComponent, ColorTableWrapperComponent, ColorFormComponent],
  // makes component available for use in templates outside the module
  exports: [ColorHomeComponent],
  // makes the services available for injecting (in this case injecting into a component)
  providers: [ColorsService],
})
export class ColorToolModule { }
