import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Channel } from "../../../core/models/channel.model";
import { ChannelService } from "../../../core/services/channel.service";

@Component({
  selector: 'modal-channel',
  standalone: true,
  templateUrl: './modal-create-channel.component.html',
  imports: [
    FormsModule
  ]
})
export class ModalCreateChannelComponent {

  constructor(private channel: ChannelService) {}

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

  /**
   * Asynchronously adds a channel by updating its name and making an HTTP POST request.
   * Logs a success message if the channel is added successfully.
   *
   * @throws Error - Throws an error if there is an issue adding the channel.
   */
  async addChannel() {
    try {
      this.inputChannel.name = this.name;
      await this.channel.postChannel(this.inputChannel);
      console.log('Channel added successfully');
    } catch (error) {
      console.error('Error adding channel:', error);
      throw error; // Propager l'erreur pour que saveAndClose puisse la gérer
    }
  }

  // addChannel() {
  //   this.inputChannel.name = this.name;
  //   this.channel.postChannel(this.inputChannel).subscribe((rep) => console.log(rep));
  // }
  // addChannel then close modal in one method, so it can be used by the Save button of the Modal

  /**
   * Asynchronously saves and closes the active modal after adding a channel.
   * Reloading the window after successful completion.
   *
   * @throws Error - Throws an error if there is an issue adding the channel or closing the modal.
   */
  async saveAndClose() {
    try {
      await this.addChannel();
      this.activeModal.close();
      window.location.reload();
    } catch (error) {
      // Gérer les erreurs ici, si nécessaire
      console.error(error);
    }
  }

  // saveAndClose(){
  //   this.addChannel();
  //   this.activeModal.close();
  //   window.location.reload();
  // }

}
