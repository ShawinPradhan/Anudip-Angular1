import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  form = new FormGroup(
    {
      full: new FormControl("",[Validators.required, Validators.minLength(3)]),
      email: new FormControl("",[Validators.required, Validators.email]),
      contact: new FormControl("",[Validators.required, Validators.pattern('[6789][0-9]{9}')]),
      user: new FormControl("",[Validators.required, Validators.minLength(4)]),
      pass: new FormControl("",[Validators.required, Validators.minLength(6)]),

    }
  );

  get f()
  {
    return this.form.controls;
  }
}
