import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from "../../../app.constants";
import { User } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})

/**
 * Service class for handling user-related CRUD operations.
 * This service communicates with the api to perform operations such as
 * retrieving users, retrieving a specific user by ID,creating, updating and deleting users
 * The methods use the API_BASE_URL constant declared in app.constants.ts
 */
export class UserFetcher {

  // Relative URL for the users API endpoint
  USER_BASE_URL = "users";

  // Constructor to inject the HttpClient service
  constructor(private http: HttpClient) {}

  // Method to retrieve all users from the server
  // Returns an observable of the HTTP response containing user data
  getUsers() {
    return this.http.get(API_BASE_URL + this.USER_BASE_URL);
  }

  // Method to retrieve a specific user by its ID from the server
  // Takes an ID parameter and returns an observable of the HTTP response containing user data
  getUserById(id: number) {
    return this.http.get<User>(API_BASE_URL + this.USER_BASE_URL + '/' + id);
  }

  // Method to add a new user to the server
  // Takes a user object parameter and returns an observable of the HTTP response
  postUser(user: User) {
    return this.http.post(API_BASE_URL + this.USER_BASE_URL, user);
  }

  // Method to delete a user by its ID from the server
  // Takes an ID parameter and returns an observable of the HTTP response
  deleteUser(id: number) {
    return this.http.delete(API_BASE_URL + this.USER_BASE_URL + '/' + id);
  }

  // Method to update an existing user on the server
  // Takes a user object parameter and returns an observable of the HTTP response
  updateUser(user: User) {
    return this.http.put(API_BASE_URL + this.USER_BASE_URL + '/' + user.id, user);
  }

}
