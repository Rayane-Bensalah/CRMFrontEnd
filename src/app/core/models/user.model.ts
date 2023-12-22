export interface User {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date | null;
}
