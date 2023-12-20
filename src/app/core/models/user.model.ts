import {Message} from "./message.model";

/**
 * Model for entity User
 */
export interface User {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  messages: Message[];
}
