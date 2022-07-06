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
  Comments = '';

  loginForm(Val: NgForm) {
    const form = Val.value;
    console.log(form);
    return form;
  }
  reset(Valy: NgForm) {
    return Valy.reset();
  }
  constructor() {}

  ngOnInit(): void { }

  settt(Vall: NgForm) {
    let useData = {
      email: 'aouladoumarahmed100@gmail.com',
      password: 'sdf',
      types: 4,
      Comments: 'hi there',
    };
     return Vall.setValue(useData);
  }
}
