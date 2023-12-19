import { Component } from '@angular/core';
import { NewChannelComponent } from '../new-channel/new-channel.component';

@Component({
  selector: 'app-channel-list',
  standalone: true,
  imports: [NewChannelComponent],
  templateUrl: './channel-list.component.html',
  styleUrl: './channel-list.component.css'
})
export class ChannelListComponent {

}
