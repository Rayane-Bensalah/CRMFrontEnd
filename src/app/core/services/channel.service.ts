import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {API_BASE_URL} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  CHANNEL_BASE_URL = "channels";

  constructor(private http: HttpClient) {}

  getChannels() {
    return this.http.get(API_BASE_URL + this.CHANNEL_BASE_URL);
  }

  getChannelById(id: number) {
    return this.http.get(API_BASE_URL + this.CHANNEL_BASE_URL + '/' + id);
  }

  // postChannel(channel: Channel) {
  //   return this.http.post(API_BASE_URL + this.CHANNEL_BASE_URL, channel);
  // }

  deleteChannel(id: number) {
    return this.http.delete(API_BASE_URL + this.CHANNEL_BASE_URL + '/' + id);
  }

  // updateChannel(channel: Channel) {
  //   return this.http.put(API_BASE_URL + this.CHANNEL_BASE_URL + '/'+channel.id, channel);
  // }
}
