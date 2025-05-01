import { User } from '../auth/auth';

export interface note {
  _id: string;
  topic: string[];
  title: string;
  body: string;
  user: User;
  __v: number;
}
// export interface NoteResponse {
//     _id: string;
//     title: string;
//     topic: string[];
//     body: string;
//     user: User;
//   }

//   export interface NoteRequest {
//     title: string;
//     topic: string[];
//     body: string;
//   }
