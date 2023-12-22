import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { COOKIE_USERNAME_STRING, COOKIE_USER_ID_STRING } from '../../../app.constants';
import { ChannelListComponent } from '../channel-list/channel-list.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MessageListComponent } from '../message-list/message-list.component';
import { UserListComponent } from "../user-list/user-list.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ChannelListComponent, MessageListComponent, UserListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  private userName: string = '';
  private userId: string = 'this.cookieService.get(COOKIE_USER_ID_STRING)';

  constructor(private router: Router, private cookieService: CookieService) {

  }
  ngOnInit(): void {
    this.userName = this.cookieService.get(COOKIE_USERNAME_STRING);
    this.userId = this.cookieService.get(COOKIE_USER_ID_STRING);

    if (this.userName == "" || this.userId == "") {
      this.redirectToStart();
    }
  }

  private redirectToStart() {
    this.cookieService.deleteAll();
    this.router.navigate(['start']);
  }
}
