import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
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
