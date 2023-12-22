import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MessageService } from '../../../core/services/message.service';
import { ChannelService } from '../../../core/services/channel.service';
import { Message } from '../../../core/models/message.model';
import { newMessage } from '../../../core/models/newMessage.model';
import {ChannelDetailComponent} from "../channel-detail/channel-detail.component";

@Component({
  selector: 'app-message-list',
  standalone: true,
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ChannelDetailComponent
  ]
})
export class MessageListComponent implements OnInit {
  messageForm: FormGroup = this.fb.group({
    content: ['', Validators.required],
  });
  messages: Message[] = [];

  channelId: number = 1;

  constructor(
    private fb: FormBuilder,
    public messageService: MessageService,
    private channelService: ChannelService
  ) {}

  ngOnInit(): void {
    // Fetch messages when the component is initialized
    this.fetchMessages();
  }

  onChannelClicked(channelId: number): void {
    // Handle the channel click event here
    // You may want to update the channelId in your component or perform other actions
    console.log('Channel clicked:', channelId);
  }

  fetchMessages(): void {
    this.channelService.fetchChannelMessages(this.channelId).subscribe(
      (messages) => {
        this.messages = messages;
      },
      (error) => {
        console.error('Error fetching messages:', error);
      }
    );
  }

  sendMessage(): void {
    const contentValue = this.messageForm.value.content;

    if (this.messageForm.valid) {
      const newMessage: newMessage = {
        userId: 1,
        channelId: this.channelId,
        content: String(contentValue),
      };

      this.messageService.addMessage(newMessage).subscribe({
        next: () => {
          // After sending a new message, fetch the updated list of messages
          this.fetchMessages();

          // Reset the form
          this.messageForm.reset();
        },
        error: (error) => {
          console.error('Error sending message:', error);
          // Handle the error appropriately
        },
      });
    }
  }
}
