import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navFlag: boolean = false;

  constructor(private _SignUpService: SignUpService, public _Router: Router) {

    _SignUpService.userToken.subscribe((data) => {

      if (data != null) {
        this.navFlag = true;
      }
      else {
        this.navFlag = false;
      }

    })
  }

  ngOnInit(): void {
  }


  logOut() {
    localStorage.clear();
    this._SignUpService.userToken.next(null);
    this._Router.navigate(['/login'])
  }
}


