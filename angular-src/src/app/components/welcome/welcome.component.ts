import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title = 'Welcome';
  private newUser: User;

  constructor(private userService: UserService) {
    this.newUser = new User('', '');
  }

  ngOnInit(): void {

  }

  submitAuthCreds(): void {
    this.userService.loginUser(this.newUser)
    .subscribe(res => {
      console.log(res);
    });

  }

}
