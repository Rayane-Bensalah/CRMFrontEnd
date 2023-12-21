import { Component } from '@angular/core';
import { UserService } from "../../../core/services/user.service";
import { UserDetailComponent } from "../user-detail/user-detail.component";
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserDetailComponent, NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  constructor(public userService : UserService) {}

}
