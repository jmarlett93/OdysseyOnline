import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GoogleOauthService } from '../../services/google-oauth.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  title = 'User';

  private rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private googleOauthService: GoogleOauthService ) {

  }

  callApi() {
    const url = this.rootUrl + '/canary/tweet';
    this.http.get(url)
      .subscribe(data => {
          console.log(data);
      });
  }

  callGoogleOauth() {
    console.log('hunga dunga');
     this.googleOauthService.callAuthGoogle().subscribe(data => {
       console.log(data);
     });
  }

  callLogout() {
    this.googleOauthService.logOut()
      .subscribe(data => {
        console.log( data );
      });
  }
}
