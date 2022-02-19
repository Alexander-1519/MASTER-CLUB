export interface dataForNewUser {
  email?: string;
  password?: string;
  role?: string;
  username?: string;
  phoneNumber?: number;
}

export interface dataForNewUserStepOne {
  email: string;
  role: number;
}

export interface dataForUserLogin {
  username: string;
  password: number;
}

export interface ErrorObject {
  error: {
    message: string;
    code: number;
  }
}

export interface AuthResponse {
  role: number;
  token: string;
}

export interface UserInfo {
  id: number
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: number;
  master: boolean;
  approved: boolean;
  role: number
}
