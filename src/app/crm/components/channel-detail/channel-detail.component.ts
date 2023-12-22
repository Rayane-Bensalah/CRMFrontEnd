import {Component, Input} from '@angular/core';
import {Channel} from "../../../core/models/channel.model";
import {ChannelService} from "../../../core/services/channel.service";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-channel-detail',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './channel-detail.component.html',
  styleUrl: './channel-detail.component.css'
})
export class ChannelDetailComponent {

  @Input()
  channel!: Channel;

  listChannels : Channel[] = [];

  constructor(public channelService : ChannelService) {
    this.channelService.fetchAllChannels().subscribe(response => {
      this.listChannels = response;
    })
  }

}
