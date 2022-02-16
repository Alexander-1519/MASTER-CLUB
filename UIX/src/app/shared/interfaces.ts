export interface DataForNewUser {
  email?: string;
  password?: string;
  role?: string;
  username?: string;
  phoneNumber?: number;
}
export interface UserAuthRequest {
  username: string;
  password: number;
}

export interface dataForUserLogin {
  username: string;
  password: number;
}

