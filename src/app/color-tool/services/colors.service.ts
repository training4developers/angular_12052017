import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Color } from '../models/color';

@Injectable()
export class ColorsService {

  // private httpClient;

  // constructor(httpClient: HttpClient) {
  //   this.httpClient = httpClient;
  // }

  constructor(private httpClient: HttpClient) { }

  // class function
  // all() {
  //   return this.httpClient.get<Color[]>('http://localhost:3050/colors');
  // }

  // class arrow function
  all = () => this.httpClient.get<Color[]>('http://localhost:3050/colors');

}
