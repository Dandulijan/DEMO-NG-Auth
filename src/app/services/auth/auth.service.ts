import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { BaseService } from '../base/base.service';
import { AuthRequest, AuthResponse } from '../../interfaces/auth/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  private readonly baseUrl =
    'https://task-react-auth-backend.eapi.joincoded.com/api/auth';

  constructor(_http: HttpClient, private cookie: CookieService) {
    super(_http);
  }

  login(data: AuthRequest): Observable<AuthResponse> {
    return this.post<AuthResponse, AuthRequest>(
      `${this.baseUrl}/login`,
      data
    ).pipe(
      catchError((error) => {
        console.error('Login failed:', error);
        return throwError(() => error);
      })
    );
  }

  register(formData: FormData): Observable<AuthResponse> {
    return this.post<AuthResponse, FormData>(
      `${this.baseUrl}/register`,
      formData
    ).pipe(
      tap((res) => {
        if (res.token) {
          this.cookie.set('token', res.token);
          console.log('Token set in cookie:', res.token);
        }
      }),
      catchError((error) => {
        console.error('Registration failed:', error);
        return throwError(() => error);
      })
    );
  }

  logout() {
    this.cookie.delete('token'); // clear session storage on logout
  }
}
