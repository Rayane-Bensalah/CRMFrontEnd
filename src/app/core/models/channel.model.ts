import {Message} from "./message.model";

/**
 * Model for entity Channel
 */

export interface Channel {
  id: number;
  name: string;
  isMain: boolean;
  createdAt: Date;
  messages: Message[];
}
