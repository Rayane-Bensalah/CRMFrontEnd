import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ChannelListComponent } from '../channel-list/channel-list.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MessageListComponent } from '../message-list/message-list.component';
import {UserListComponent} from "../user-list/user-list.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ChannelListComponent, MessageListComponent, UserListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private router: Router, private cookieService: CookieService) {
    /*if (this.cookieService.get('username') == '') {
      this.router.navigate(['start']);
    }*/
  }
}
