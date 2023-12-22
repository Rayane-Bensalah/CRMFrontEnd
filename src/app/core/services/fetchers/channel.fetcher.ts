import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from "../../../app.constants";
import { Channel } from "../../models/channel.model";
import {lastValueFrom} from "rxjs";
import {Message} from "../../models/message.model";

@Injectable({
  providedIn: 'root'
})

/**
 * Service class for handling channel-related CRUD operations.
 * This service communicates with the api to perform operations such as
 * retrieving channels, retrieving a specific channel by ID,creating, updating and deleting channels
 * The methods use the API_BASE_URL constant declared in app.constants.ts
 */
export class ChannelFetcher {

  // Relative URL for the channels API endpoint
  CHANNEL_BASE_URL = "channels";

  // Constructor to inject the HttpClient service
  constructor(private http: HttpClient) {}

  // Method to retrieve all channels from the server
  // Returns an observable of the HTTP response containing channel data
  getChannels() {
    return this.http.get<Channel[]>(API_BASE_URL + this.CHANNEL_BASE_URL);
  }

  // Method to retrieve a specific channel by its ID from the server
  // Takes an ID parameter and returns an observable of the HTTP response containing channel data
  getChannelById(id: number) {
    return this.http.get<Channel>(API_BASE_URL + this.CHANNEL_BASE_URL + '/' + id);
  }

  /**
   * Sends a POST request to add a channel using the provided Channel object.
   *
   * @param channel - The Channel object to be added.
   * @returns A Promise that resolves when the HTTP request is completed.
   */
  postChannel(channel: Channel): Promise<any> {
    return lastValueFrom(this.http.post(API_BASE_URL + this.CHANNEL_BASE_URL, channel));
  }

  // postChannel(channel: Channel) {
  //   return this.http.post(API_BASE_URL + this.CHANNEL_BASE_URL, channel);
  // }

  // Method to delete a channel by its ID from the server
  // Takes an ID parameter and returns an observable of the HTTP response
  deleteChannel(id: number) {
    return this.http.delete(API_BASE_URL + this.CHANNEL_BASE_URL + '/' + id);
  }

  // Method to update an existing channel on the server
  // Takes a Channel object parameter and returns an observable of the HTTP response
  updateChannel(channel: Channel) {
    return this.http.put(API_BASE_URL + this.CHANNEL_BASE_URL + '/'+channel.id, channel);
  }

  // Method to retrieve all messages with specific channelId by its ID from the server
  // Takes an ID parameter and returns an array of Messages
  getChannelMessages(id: number) {
    return this.http.get<Message[]>(API_BASE_URL + this.CHANNEL_BASE_URL + '/' + id + '/messages');
  }

}
