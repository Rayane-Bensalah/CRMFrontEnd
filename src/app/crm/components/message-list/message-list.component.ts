import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageService } from '../../../core/services/message.service';
import { UserService } from '../../../core/services/user.service';
import { MessageSend } from '../../../core/models/messageSend.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
})
export class MessageListComponent {
  messageForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public messageService: MessageService,
    private userService: UserService,
  ) {
    this.messageForm = this.fb.group({
      content: ['', Validators.required],
    });
  }

  get content() {
    return this.messageForm.get('content');
  }

  sendMessage(): void {
    console.log('Message Success ! ');
    if (this.messageForm.valid) {
      const newMessage: MessageSend = {
        user_id: this.userService.getUserId(),
        channel_id: 0,
        content: this.messageForm.value.content,
      };

      this.messageService
        .addMessage(newMessage)
        .subscribe((data) => console.log(data));

      this.messageForm.reset();
    }
  }
}
