import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_BASE_URL } from "../../app.constants";
import {Channel} from "../models/channel.model";

@Injectable({
  providedIn: 'root'
})

/**
 * Service class for handling channel-related operations.
 */
export class ChannelService {

  // Constructor to inject the HttpClient service
  constructor(private http: HttpClient) {}

}
