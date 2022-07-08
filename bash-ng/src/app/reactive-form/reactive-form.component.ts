import { group } from '@angular/animations';
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
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  status4: boolean = false;
  status5: boolean = false;
  status6: boolean = false;
  status7: boolean = false;
  status8: boolean = false;
  status9: boolean = false;

  // public from: FormGroup = new FormGroup({
  //   First_name: new FormControl(
  //     '',
  //     [Validators.required, Validators.maxLength(20)],
  //     []
  //   ),

  //   Last_name: new FormControl('', Validators.required, []),
  // });

  public addForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.addForm = this.fb.group({
      First_name: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(2),
        ],
      ],
      Last_name: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(2),
        ],
      ],
      Email: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(2),
        ],
      ],
      Password: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(2),
        ],
      ],
      Address: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(2),
        ],
      ],
      Address_2: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(2),
        ],
      ],
      City: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(2),
        ],
      ],
      State: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(2),
        ],
      ],
      Zip: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(2),
        ],
      ],
      Check_me_out: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(2),
        ],
      ],
    });

    this.addForm.valueChanges.subscribe((form) => {
      console.log(this.addForm);
    });
  }

  // get First_name() {
  //   return this.porfileForm.get('First_name');
  // }

  // onSubmit(): void {
  //   console.log(this.porfileForm);
  // }
}
