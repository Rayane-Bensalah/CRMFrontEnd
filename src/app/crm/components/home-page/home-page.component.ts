import { Component } from '@angular/core';
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

}
