import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  control = new FormControl();
  model = 7;

  // addform!: FormGroup;
  // types = ' where do i put this';
  // Comments = '';

  // loginForm(Val: NgForm) {
  //   const form = Val.value;
  //   console.log(form);
  //   return form;
  // }
  // reset(Valy: NgForm) {
  //   return Valy.reset();
  // }
  // settt(Vall: NgForm) {
  //   let useData = {

  //     types: 4,
  //     Comments: 'hi there',
  //   };
  //    return Vall.setValue(useData);
  // }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.addform = this.fb.group({
    //   formName:['', Validators.email] ,
    //   formDescription:['1', Validators.required]
    // });
  }
}
