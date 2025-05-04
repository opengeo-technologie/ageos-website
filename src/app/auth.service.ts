import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  // private apiUrl = "http://127.0.0.1:8000/api/login/";
  private apiUrl = "https://ageos.ga/api/login/";

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}`, credentials, {
      headers: new HttpHeaders(),
    });
  }

  refreshToken(refresh: string): Observable<any> {
    return this.http.post(`${this.apiUrl}refresh/`, { refresh });
  }

  logout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }

  saveTokens(access: string, refresh: string) {
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);
  }

  getAccessToken(): string | null {
    return localStorage.getItem("access");
  }

  getRefreshToken(): string | null {
    return localStorage.getItem("refresh");
  }
}
