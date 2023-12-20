import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_BASE_URL } from "../../app.constants";
import {Message} from "../models/message.model";

@Injectable({
  providedIn: 'root'
})

/**
 * Service class for handling message-related operations.
 */
export class MessageService {

  // Constructor to inject the HttpClient service
  constructor(private http: HttpClient) {}

}
