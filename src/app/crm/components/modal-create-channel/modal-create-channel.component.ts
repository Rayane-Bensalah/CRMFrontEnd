import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChannelService } from "../../../core/services/channel.service";
import { FormsModule } from "@angular/forms";
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

  // Import NgbActiveModal, a service created by library Ng-Bootstrap to use bootstrap component Modal
  activeModal = inject(NgbActiveModal);
  name : string = "";

  // Create a Channel, modify it with our data then save it
  inputChannel: Channel = {
    id: 0,
    name: "",
    isMain: false,
    createdAt: new Date(),
    messages: []
  };

  // Use the previously created inputChannel, replace name with name provided by user in form, then save it using ChannelService method postChannel()
  addChannel() {
    this.inputChannel.name = this.name;
    this.channel.postChannel(this.inputChannel).subscribe((rep) => console.log(rep));
  }

  // addChannel then close modal in one method, so it can be used by the Save button of the Modal
  saveAndClose(){
    this.addChannel();
    this.activeModal.close();
  }

}
