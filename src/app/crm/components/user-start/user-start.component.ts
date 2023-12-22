import { NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { COOKIE_USERNAME_STRING, COOKIE_USER_ID_STRING } from '../../../app.constants';
import { NewUser } from '../../../core/models/newUser.model';
import { User } from '../../../core/models/user.model';
import { UserService } from './../../../core/services/user.service';

@Component({
  selector: 'app-user-start',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './user-start.component.html',
  styleUrl: './user-start.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [CookieService]
})
export class UserStartComponent implements OnInit {

  @Output()
  change = new EventEmitter();

  startForm = this.formBuilder.group({
    username: new FormControl('', [
      Validators.required, Validators.pattern("^[A-Za-z0-9]\\w{3,19}$")
    ])
  });

  private userName: string = '';
  private userId: string = '';

  constructor(private router: Router, private cookieService: CookieService, private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userName = this.cookieService.get(COOKIE_USERNAME_STRING);
    this.userId = this.cookieService.get(COOKIE_USER_ID_STRING);

    if (this.userName != "" && this.userId != "") {
      this.redirectToHome();
    }
  }

  private redirectToHome() {
    this.router.navigate(['home']);
  }

  onSubmit() {
    const newUser: NewUser = {
      userName: String(this.startForm.value.username)
    };

    this.userService.addUser(newUser).subscribe((response: User) => {
      if (response) {
        this.cookieService.set(COOKIE_USERNAME_STRING, response.userName);
        this.cookieService.set(COOKIE_USER_ID_STRING, String(response.id));
        this.redirectToHome();
      }
    });
  }

  userNameRequired() {
    const username = this.startForm.controls.username;
    return username.touched && username.hasError('required');
  }

  userNameCheckFormat() {
    const username = this.startForm.controls.username;
    return username.touched && username.hasError('pattern');
  }
}
