import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Channel} from "../../../core/models/channel.model";
import {ChannelService} from "../../../core/services/channel.service";
import {NgFor} from "@angular/common";
import {Message} from "../../../core/models/message.model";

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

  @Output()
  channelClicked = new EventEmitter<number>();

  listChannels : Channel[] = [];

  constructor(public channelService : ChannelService) {
    this.channelService.fetchAllChannels().subscribe(response => {
      this.listChannels = response;
    })
  }

  switchChannel(id: number): void {
    this.channelClicked.emit(id);
  }



}
