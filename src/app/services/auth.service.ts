import { HttpClient, HttpContext } from "@angular/common/http";
import { Injectable, inject, DestroyRef, WritableSignal, signal } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable, catchError, of, tap, throwError } from "rxjs";
import { LoginResponse } from "../models/login-response.type";
import { LoginSuccess } from "../models/login-success";
import { Login } from "../models/login.interface";
import { Usuario } from "../models/usuario.interface";
import { IS_PUBLIC } from "./auth.interceptor";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    private readonly http = inject(HttpClient);
    private readonly router = inject(Router);
    private readonly jwtHelper = inject(JwtHelperService);
    private readonly destroyRef = inject(DestroyRef);
    private readonly CONTEXT = {context: new HttpContext().set(IS_PUBLIC, true)};

  
    get user(): WritableSignal<Usuario | null> {
      const token = localStorage.getItem('accessToken');
      return signal(token ? this.jwtHelper.decodeToken(token) : null);
    }
  
    isAuthenticated(): boolean {
      return !localStorage.getItem('accessToken');
    }
  
    login(body: Login): Observable<LoginResponse> {
      return this.http.post<LoginResponse>(`${environment.apiUrl}/login`, body, this.CONTEXT)
        .pipe(
          catchError(error => {
            if (error.status === 401) {
              // Handle invalid credentials
              const err = new Error('Login ou senha incorretos.');
              return throwError(() => err);
            }
            return of();
          }),
          tap(data => {
            const loginSuccessData = data as LoginSuccess;
            this.storeTokens(loginSuccessData);
            //this.scheduleTokenRefresh(loginSuccessData.accessToken);
            this.router.navigate(['/clientes']);
          })
        );
    }
  
    logout(): void {
      // if you don't have any backend route to invalidate the refresh token
      // then just remove localStorage items and redirect to login route
      localStorage.removeItem('accessToken');
      //localStorage.removeItem('refresh_token');
      this.router.navigate(['/login']);
    }
  
    storeTokens(data: LoginSuccess): void {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refresh_token', data.refresh_token);
    }

    /*refreshToken(): Observable<LoginResponse | null> {
        const refresh_token = localStorage.getItem('refresh_token');
        if (!refresh_token) {
            return of();
        }

        return this.http.post<LoginResponse>(
            `${environment.apiUrl}/token/refresh`, {refresh_token}, this.CONTEXT)
            .pipe(
            catchError(() => of()),
            tap(data => {
                const loginSuccessData = data as LoginSuccess;
                this.storeTokens(loginSuccessData);
                this.scheduleTokenRefresh(loginSuccessData.accessToken);
            })
        );
    }*/

    /*scheduleTokenRefresh(token: string): void {
    const expirationTime = this.jwtHelper.getTokenExpirationDate(token)?.getTime();
    const refreshTime = expirationTime ? expirationTime - this.TOKEN_EXPIRY_THRESHOLD_MINUTES * 60 * 1000 : Date.now();
    const refreshInterval = refreshTime - Date.now();

    if (refreshInterval > 0) {
        setTimeout(() => {
        this.refreshToken()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe();
        }, refreshInterval);
    }
  }*/
}