import { Component, Input } from '@angular/core';

import { Color } from '../../models/color';

@Component({
  selector: 'color-table',
  templateUrl: './color-table.component.html',
  styleUrls: ['./color-table.component.css']
})
export class ColorTableComponent {

  @Input()
  public colorData: Color[] = [];

}
