export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
export class user {
  constructor(public uid: string, public email: string) {}
}
