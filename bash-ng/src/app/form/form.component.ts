import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  email = '';
  password = '';
  types = ' where do i put this';

  loginForm(Val: NgForm) {
    const form = Val.value;
    console.log(form);
    return form;
  }

  constructor() {}

  ngOnInit(): void {}
}
