import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_BASE_URL} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  MESSAGE_BASE_URL = "messages";

  constructor(private http: HttpClient) {}

  getMessages() {
    return this.http.get(API_BASE_URL + this.MESSAGE_BASE_URL);
  }

  getMessageById(id: number) {
    return this.http.get(API_BASE_URL + this.MESSAGE_BASE_URL + '/' + id);
  }

  // postMessage(message: Message) {
  //   return this.http.post(API_BASE_URL + this.MESSAGE_BASE_URL, message);
  // }

  deleteMessage(id: number) {
    return this.http.delete(API_BASE_URL + this.MESSAGE_BASE_URL + '/' + id);
  }

  // updateMessage(message: Message) {
  //   return this.http.put(API_BASE_URL + this.MESSAGE_BASE_URL + '/'+message.id, message);
  // }

}
