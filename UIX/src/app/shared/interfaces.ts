export interface dataForNewUser {
  email?: string;
  password?: string;
  role?: number;
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

