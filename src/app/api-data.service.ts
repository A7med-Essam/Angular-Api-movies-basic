import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiDataService {
  constructor(public _HttpClient: HttpClient) { }

  getData(category): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${category}/popular?api_key=71edfe51fc01a6ea3e62395cdb5b376f&language=en-US&page=1`)
  }

  getDetails(category,id): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${category}/${id}?api_key=71edfe51fc01a6ea3e62395cdb5b376f&language=en-US`)
  }

}
