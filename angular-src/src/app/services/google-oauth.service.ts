import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GoogleOauthService {
    private rootUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    callAuthGoogle() {
        const headers = new HttpHeaders()
        .append('Content-Type', 'application/json');
        const options = { headers: headers };
      const url = this.rootUrl + '/auth/google';
      return this.http.get(url, options);
    }
}
