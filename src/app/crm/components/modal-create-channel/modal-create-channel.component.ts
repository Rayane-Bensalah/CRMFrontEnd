import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChannelService } from "../../../core/services/channel.service";
import { FormsModule } from "@angular/forms";
import { NewChannelComponent } from "../new-channel/new-channel.component";
import {ChannelFetcher} from "../../../core/services/fetchers/channel.fetcher";
import {Channel} from "../../../core/models/channel.model";

@Component({
  selector: 'modal-channel',
  standalone: true,
  templateUrl: './modal-create-channel.component.html',
  imports: [
    FormsModule
  ]
})
export class ModalCreateChannelComponent {

  constructor(private channel: ChannelService, private http:ChannelFetcher) {}

  activeModal = inject(NgbActiveModal);
  name : string = "";

  inputChannel: Channel = {
    id: 0,
    name: "",
    isMain: false,
    createdAt: new Date(),
    messages: []
  };

  addChannel() {
    this.inputChannel.name = this.name;
    this.channel.postChannel(this.inputChannel).subscribe((rep) => console.log(rep));
  }

  saveAndClose(){
    this.addChannel();
    this.activeModal.close();
  }

}
