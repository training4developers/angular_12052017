import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Color } from '../../models/color';
import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  public colors: Color[] = [];
  public colorForm: FormGroup;

  // must be registered with the providers in the module to inject
  constructor(
    private colorsSvc: ColorsService,
    private fb: FormBuilder,
  ) {

    this.colorForm = this.fb.group({
      nameInput: '',
      hexCodeInput: '',
    });

  }

  ngOnInit() {
    // the colors service returns an observable which can be subscribed too
    this.colorsSvc.all().subscribe(colors => this.colors = colors);
  }

  public showFormData() {
    // console.log('save was clicked');
    console.dir(this.colorForm.value);
    // console.dir(this.colorForm);
    this.colors = this.colors.concat({
      name: this.colorForm.value.nameInput,
      hexCode: this.colorForm.value.hexCodeInput,
    });

    console.dir(this.colors);
  }

}
