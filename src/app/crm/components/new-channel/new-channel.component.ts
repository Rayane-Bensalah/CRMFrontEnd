import { Component, inject } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ChannelService } from "../../../core/services/channel.service";
import { ModalCreateChannelComponent } from "../modal-create-channel/modal-create-channel.component";

@Component({
  selector: 'app-new-channel',
  standalone: true,
  imports: [ModalCreateChannelComponent],
  templateUrl: './new-channel.component.html',
  styleUrl: './new-channel.component.css'
})
export class NewChannelComponent {

  constructor(private channel: ChannelService) {}

  // Import NgbModal, a service created by library Ng-Bootstrap to use bootstrap component Modal
  private modalService = inject(NgbModal);

  open() {
    const modalRef = this.modalService.open(ModalCreateChannelComponent, {
      centered: true
    });
  }

}
