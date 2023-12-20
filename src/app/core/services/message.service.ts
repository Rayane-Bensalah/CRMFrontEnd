import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_BASE_URL } from "../../app.constants";
import {Message} from "../models/message.model";

@Injectable({
  providedIn: 'root'
})

/**
 * Service class for handling message-related operations.
 * This service communicates with the api to perform operations such as
 * retrieving messages, retrieving a specific message by ID,creating, updating and deleting messages
 * The methods use the API_BASE_URL constant declared in app.constants.ts
 */
export class MessageService {

  // Relative URL for the messages API endpoint
  MESSAGE_BASE_URL = "messages";

  // Constructor to inject the HttpClient service
  constructor(private http: HttpClient) {}

  // Method to retrieve all messages from the server
  // Returns an observable of the HTTP response containing message data
  getMessages() {
    return this.http.get(API_BASE_URL + this.MESSAGE_BASE_URL);
  }

  // Method to retrieve a specific message by its ID from the server
  // Takes an ID parameter and returns an observable of the HTTP response containing message data
  getMessageById(id: number) {
    return this.http.get(API_BASE_URL + this.MESSAGE_BASE_URL + '/' + id);
  }

  // Method to add a new message to the server
  // Takes a message object parameter and returns an observable of the HTTP response
  postMessage(message: Message) {
    return this.http.post(API_BASE_URL + this.MESSAGE_BASE_URL, message);
  }

  // Method to delete a message by its ID from the server
  // Takes an ID parameter and returns an observable of the HTTP response
  deleteMessage(id: number) {
    return this.http.delete(API_BASE_URL + this.MESSAGE_BASE_URL + '/' + id);
  }

  // Method to update an existing message on the server
  // Takes a message object parameter and returns an observable of the HTTP response
  updateMessage(message: Message) {
    return this.http.put(API_BASE_URL + this.MESSAGE_BASE_URL + '/'+message.id, message);
  }

}
