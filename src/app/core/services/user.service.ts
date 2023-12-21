import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../app.constants';
import { UserFetcher } from './fetchers/user.fetcher';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})

/**
 * Service class for handling user-related operations.
 * This service communicates with the api to perform operations such as
 * retrieving users, retrieving a specific user by ID,creating, updating and deleting users
 * The methods use the API_BASE_URL constant declared in app.constants.ts
 */
export class UserService {
  constructor(
    private http: UserFetcher,
    private cookie: CookieService,
  ) {}

  private users: User[] = [];

  fetchUser(): Observable<User[]> {
    return this.http.getUsers();
  }

  //Add user
  addUser(newUser: User): void {
    this.users.push(newUser);
  }

  // Update user
  updateUser(updatedUser: User): void {
    const index = this.users.findIndex((usr) => usr.id === updatedUser.id);
    if (index != -1) this.users[index] = updatedUser;
  }

  // Delete user
  deleteUser(userId: number): void {
    this.users = this.users.filter((usr) => usr.id != userId);
  }

  getUserId(): number {
    return parseInt(this.cookie.get('user_id'));
  }
}
