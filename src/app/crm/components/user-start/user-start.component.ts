import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-start',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-start.component.html',
  styleUrl: './user-start.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [CookieService]
})
export class UserStartComponent implements OnInit {

  @Output()
  change = new EventEmitter();

  startForm = this.formBuilder.group({
    username: ['', Validators.required]
  });
  private username: string = '';

  constructor(private router: Router, private cookieService: CookieService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    //this.cookieService.set('username', 'David');
    this.cookieService.delete('username')
    this.username = this.cookieService.get('username');
  }

  private redirectToHome() {
    this.router.navigate(['home']);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.startForm.value);
  }

}
