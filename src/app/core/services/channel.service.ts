import { Injectable } from '@angular/core';
import { Channel } from '../models/channel.model';
import { ChannelFetcher } from './fetchers/channel.fetcher';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})

/**
 * Service class for handling channel-related operations using the ChannelFetcher service.
 */
export class ChannelService {
  // Constructor with ChannelFetcher
  constructor(
    private http: ChannelFetcher,
    private cookie: CookieService,
  ) {}

  private channels: Channel[] = [];

  fetchAllChannels(): Observable<Channel[]> {
    return this.http.getChannels();
  }

  fetchChannelByID(id: number): Observable<Channel> {
    return this.http.getChannelById(id);
  }

  postChannel(channel: Channel) {
    return this.http.postChannel(channel);
  }

  deleteChannel(id: number) {
    return this.http.deleteChannel(id);
  }

  updateChannel(channel: Channel) {
    return this.http.updateChannel(channel);
  }
}
