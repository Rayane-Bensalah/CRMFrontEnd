import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageService } from '../../../core/services/message.service';
import { UserService } from '../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { Message } from '../../../core/models/message.model';
import { ChannelService } from '../../../core/services/channel.service';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
})
export class MessageListComponent {
  messageForm: FormGroup;

  sentMessages: String[] = [];
  constructor(
    private fb: FormBuilder,
    public messageService: MessageService,
    private userService: UserService,
    private channelService: ChannelService,
  ) {
    this.messageForm = this.fb.group({
      content: ['', Validators.required],
    });
  }

  messageContent: String = '';

  get content() {
    return this.messageForm.get('content');
  }

  sendMessage(): void {
    const contentValue = this.messageForm.value.content;
    const contentAsString: string = String(contentValue);
    const defaultChannelId = 1;
    const channelValue = this.messageForm.value.channel || defaultChannelId;
    if (this.messageForm.valid) {
      const newMessage: Message = {
        id: 1,
        user: this.userService.getUserId(),
        channel: channelValue,
        content: contentAsString,
        sendDate: new Date(),
      };

      this.messageService
        .addMessage(newMessage)
        .subscribe((data) => console.log(data));

      this.sentMessages.push(newMessage.content);
      this.messageForm.reset();
    }
  }
}
