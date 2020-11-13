import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpService } from '../sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(public _SignUpService: SignUpService, public _Router: Router) { }

  ngOnInit(): void {
  }
  flag: boolean = false;


  RegForm: FormGroup = new FormGroup({
    'first_name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'last_name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][a-z0-9]{2,}$')]),
  })


  regSubmit(RegForm) {

    if (this.RegForm.valid == true) {
      this._SignUpService.setRegInfo(RegForm.value).subscribe((data) => {

        if (data.message == "success") {
          this._Router.navigate(['/login'])
        }

        else {
          this.flag = true;
        }

      })
    }

  }

}



