import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { BaseService } from '../base/base.service';
import { note } from '../../interfaces/notes/note';

@Injectable({
  providedIn: 'root',
})
export class NoteService extends BaseService {
  private readonly baseUrl =
    'https://task-react-auth-backend.eapi.joincoded.com/api';

  constructor(_http: HttpClient) {
    super(_http);
  }

  getAllNotes(): Observable<note[]> {
    // return this.get<Response>(`${this.baseUrl}/notes`).pipe(
    //   catchError((error) => {
    //     console.error('Fetching users failed:', error);
    //     return throwError(() => error);
    //   })
    // );
    // return this.get<note[]>(this.baseUrl + '/notes');
    return this.get<note[]>(`${this.baseUrl}/notes`).pipe(
      catchError((error) => {
        console.error('Loading notes failed:', error);
        return throwError(() => error);
      })
    );
  }

  getNoteById(id: string | null): Observable<note> {
    console.log('ID:', id);
    return this.get<note>(`${this.baseUrl}/notes/${id}`);
  }
  // return this.get<note>(`${this.baseUrl}/notes/${id}`).pipe(
  //   catchError((error) => {
  //     console.log('Loading note failed:', error);
  //     return throwError(() => error);
  //   })
  // );
  createNote(note: note): Observable<note> {
    return this.post<note, note>(`${this.baseUrl}/notes`, note).pipe(
      catchError((error) => {
        console.error('Creating note failed:', error);
        return throwError(() => error);
      })
    );
  }
}
