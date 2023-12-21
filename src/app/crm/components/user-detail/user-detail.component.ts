import {Component, Input} from '@angular/core';
import {User} from "../../../core/models/user.model";
import {UserService} from "../../../core/services/user.service";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  @Input()
  user!: User;

  listUsers : User[] = [];

  constructor(public userService : UserService) {
    this.userService.fetchUser().subscribe(response => {
      this.listUsers = response;
      console.log(response);
    })
  }

}
