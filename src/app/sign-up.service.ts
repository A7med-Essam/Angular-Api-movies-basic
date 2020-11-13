import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SignUpService {

  
 
  userToken:any = new BehaviorSubject(null);

  constructor(public _HttpClient: HttpClient) { 
    if (localStorage.getItem("token") != null) {
      this.userToken.next(localStorage.getItem("token"))
    }
  }


  setRegInfo(RegInfo): Observable<any> {
    return this._HttpClient.post(`https://routeegypt.herokuapp.com/signup`, RegInfo)
  }

  setLoginInfo(LoginInfo): Observable<any> {
    return this._HttpClient.post(`https://routeegypt.herokuapp.com/signin`, LoginInfo)
  }

  saveToken(token):Observable<any>
  {
    localStorage.setItem("token",token);
     return this.userToken.next(token);
  }

}
