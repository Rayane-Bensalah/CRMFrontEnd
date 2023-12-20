import {Channel} from "./channel.model";
import {User} from "./user.model";

/**
 * Model for entity Message
 */
export interface Message {
  id: number;
  content: string;
  user: User;
  channel: Channel;
  sendDate: Date;
}
