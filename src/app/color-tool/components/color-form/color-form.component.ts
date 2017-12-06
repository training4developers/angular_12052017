import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Color } from '../../models/color';

@Component({
  selector: 'color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent {

  public colorForm: FormGroup;

  @Output()
  public saveColor = new EventEmitter<Color>();

  public submitColor() {
    this.saveColor.emit({
      name: this.colorForm.controls.nameInput.value,
      hexCode: this.colorForm.controls.hexCodeInput.value,
    });
  }

  constructor(
    private fb: FormBuilder,
  ) {

    this.colorForm = this.fb.group({
      nameInput: [ '', Validators.required ],
      hexCodeInput: '',
    });

  }

}
