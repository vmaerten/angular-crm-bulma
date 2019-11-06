import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {checkPassword} from "../checkPasswordValidator";

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor() {
    // Login form definition
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, checkPassword])
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
  }

  shouldDisplayErrors(field: string) {
    return (!this.loginForm.get(field).valid && this.loginForm.get(field).touched);
  }


}
