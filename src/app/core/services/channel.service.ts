import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_BASE_URL } from "../../app.constants";

@Injectable({
  providedIn: 'root'
})

/**
 * Service class for handling channel-related operations.
 * This service communicates with the api to perform operations such as
 * retrieving channels, retrieving a specific channel by ID,creating, updating and deleting channels
 * The methods use the API_BASE_URL constant declared in app.constants.ts
 */
export class ChannelService {

  // Relative URL for the channels API endpoint
  CHANNEL_BASE_URL = "channels";

  // Constructor to inject the HttpClient service
  constructor(private http: HttpClient) {}

  // Method to retrieve all channels from the server
  // Returns an observable of the HTTP response containing channel data
  getChannels() {
    return this.http.get(API_BASE_URL + this.CHANNEL_BASE_URL);
  }

  // Method to retrieve a specific channel by its ID from the server
  // Takes an ID parameter and returns an observable of the HTTP response containing channel data
  getChannelById(id: number) {
    return this.http.get(API_BASE_URL + this.CHANNEL_BASE_URL + '/' + id);
  }

  // Method to add a new channel to the server
  // Takes a Channel object parameter and returns an observable of the HTTP response
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
  // updateChannel(channel: Channel) {
  //   return this.http.put(API_BASE_URL + this.CHANNEL_BASE_URL + '/'+channel.id, channel);
  // }

}
