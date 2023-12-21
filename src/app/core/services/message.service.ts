import { Injectable } from '@angular/core';
import { MessageFetcher } from './fetchers/message.fetcher';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';
import { CookieService } from 'ngx-cookie-service';
import { newMessage } from '../models/newMessage.model';

@Injectable({
  providedIn: 'root',
})

/**
 * Service class for handling message-related operations.
 * This service communicates with the api to perform operations such as
 * retrieving messages, retrieving a specific message by ID,creating, updating and deleting messages
 * The methods use the API_BASE_URL constant declared in app.constants.ts
 */
export class MessageService {
  constructor(private http: MessageFetcher) {}

  private messages: Message[] = [];

  fetchMessage(): Observable<Message[]> {
    return this.http.getMessages();
  }

  // Add message to DB
  addMessage(newMessage: newMessage): Observable<any> {
    return this.http.postMessage(newMessage);
  }

  // Update message from DB
  updateMessage(updatedMessage: Message): void {
    const index = this.messages.findIndex(
      (msg) => msg.id === updatedMessage.id,
    );
    if (index !== -1) {
      this.http.updateMessage(updatedMessage);
    }
  }

  // Delete message with id input
  deleteMessage(messageId: number): void {
    this.http.deleteMessage(messageId);
  }
}
