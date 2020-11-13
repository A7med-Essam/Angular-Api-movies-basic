import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpService } from '../sign-up.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _SignUpService: SignUpService , public _Router:Router) { }

  flag: boolean = false;

  ngOnInit(): void {
  }

  loginForm: FormGroup = new FormGroup({
    'email': new FormControl(null, Validators.required),
    'password': new FormControl(null, Validators.required),
  })
  FailedLogin: any;
  loginSubmit(loginData) {
    this._SignUpService.setLoginInfo(loginData.value).subscribe((data) => {
      if (data.message == "success") {
        this._SignUpService.saveToken(data.token);
        this._Router.navigate(['/movies']);
      }
      else {
        this.flag = true;
        this.FailedLogin = data.message;
      }
    })
  }




}

