import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  loginUser(userCreds){
    let url = this.rootUrl + '/user/verifyuser';
    return this.http.post(url, userCreds);
  }
}
