export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  id?: number;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  image: string;
  __v: number;
}
