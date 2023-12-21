import { NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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
    username: new FormControl(null, [
      Validators.required, Validators.pattern("^[A-Za-z0-9]\\w{3,14}$")
    ])
  });

  private username: string = '';

  constructor(private router: Router, private cookieService: CookieService, private formBuilder: FormBuilder, private userService: UserService) {
    /*this.userService.fetchUser().subscribe(response => {
      console.log(response);
    });*/
  }

  ngOnInit(): void {
    //this.cookieService.set('username', 'David');
    //this.cookieService.delete('username')
    //this.username = this.cookieService.get('username');
  }

  private redirectToHome() {
    this.router.navigate(['home']);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.startForm.value);
  }

}
