import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_BASE_URL } from "../../app.constants";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})

/**
 * Service class for handling user-related operations.
 */
export class UserService {

  // Constructor to inject the HttpClient service
  constructor(private http: HttpClient) {}


}
