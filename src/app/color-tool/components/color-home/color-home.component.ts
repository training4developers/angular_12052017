import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Color } from '../../models/color';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  public colors: Color[] = [];

  // private httpClient;

  // constructor(httpClient: HttpClient) {
  //   this.httpClient = httpClient;
  // }

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.get<Color[]>('http://localhost:3050/colors')
      .subscribe(colors => this.colors = colors);
  }

}
