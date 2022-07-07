import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  control = new FormControl();
  controll = new FormControl();
  model = 7;
  controltow = new FormControl();

  name = new FormControl();
  a!: any;
  porfileForm = new FormGroup({
    controltoww: new FormControl(),
    modeltow: new FormControl(),
  });

  constructor() {
    this.name.valueChanges.subscribe((changes) => (changes = this.controltow));
  }

  ngOnInit(): void {}
  onSubmit() {
    this.a = this.porfileForm;
    return this.a; 
  }
}
