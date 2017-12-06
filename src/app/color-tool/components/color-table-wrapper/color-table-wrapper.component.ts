import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Color } from '../../models/color';


@Component({
  selector: 'color-table-wrapper',
  templateUrl: './color-table-wrapper.component.html',
  styleUrls: ['./color-table-wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorTableWrapperComponent implements OnInit {

  @Input()
  public colorData: Color[] = [];

  constructor() { }

  ngOnInit() {
  }

}
