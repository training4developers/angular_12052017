import { Component, OnInit } from '@angular/core';

import { Color } from '../../models/color';
import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  public colors: Color[] = [];

  // must be registered with the providers in the module to inject
  constructor(
    private colorsSvc: ColorsService,
  ) { }

  ngOnInit() {
    // the colors service returns an observable which can be subscribed too
    this.colorsSvc.all().subscribe(colors => this.colors = colors);
  }

  public insertColor(newColor: Color) {
    this.colors = this.colors.concat(newColor);
  }
}
