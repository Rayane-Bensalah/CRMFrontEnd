import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_BASE_URL} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_BASE_URL = "users";

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(API_BASE_URL + this.USER_BASE_URL);
  }

  getUserById(id: number) {
    return this.http.get(API_BASE_URL + this.USER_BASE_URL + '/' + id);
  }

  // postUser(user: User) {
  //   return this.http.post(API_BASE_URL + this.USER_BASE_URL, user);
  // }

  deleteUser(id: number) {
    return this.http.delete(API_BASE_URL + this.USER_BASE_URL + '/' + id);
  }

  // updateUser(user: User) {
  //   return this.http.put(API_BASE_URL + this.USER_BASE_URL + '/'+user.id, user);
  // }


}
