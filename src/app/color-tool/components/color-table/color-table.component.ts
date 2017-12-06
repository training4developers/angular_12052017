import { Component, Input, DoCheck } from '@angular/core';

import { Color } from '../../models/color';

@Component({
  selector: 'color-table',
  templateUrl: './color-table.component.html',
  styleUrls: ['./color-table.component.css'],
})
export class ColorTableComponent implements DoCheck {

  @Input()
  public colorData: Color[] = [];

  ngDoCheck() {
    console.log('color table: change detection is running');
  }

}
