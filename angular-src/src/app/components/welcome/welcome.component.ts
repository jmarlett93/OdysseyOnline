import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title = 'Welcome';
  private newUser: User;

  constructor() {
    this.newUser = new User('','');
  }

  ngOnInit(): void {

  }

  submitAuthCreds(): void{
    console.log(this.newUser);
  }

}
