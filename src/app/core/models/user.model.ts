export interface User {
  id: number;
  user_name: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  created_at: Date;
  updated_at?: Date | null;
}
