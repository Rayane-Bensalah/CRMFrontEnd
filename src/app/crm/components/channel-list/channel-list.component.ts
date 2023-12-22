import { Component } from '@angular/core';
import { NewChannelComponent } from '../new-channel/new-channel.component';
import { ChannelService } from "../../../core/services/channel.service";
import { ChannelDetailComponent } from "../channel-detail/channel-detail.component";
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-channel-list',
  standalone: true,
  imports: [NewChannelComponent, ChannelDetailComponent, NgFor],
  templateUrl: './channel-list.component.html',
  styleUrl: './channel-list.component.css'
})
export class ChannelListComponent {

  constructor(public channelService : ChannelService) {}

}
