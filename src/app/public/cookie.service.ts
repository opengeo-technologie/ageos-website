import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class AppCookieService {
  // private url: string = "http://127.0.0.1:8000/api/";
  private url: string = "https://ageos.ga/api/";

  private apiURL = "https://ipapi.co/json/";

  constructor(private cookieService: CookieService, private http: HttpClient) {}

  setLanguage(language: string) {
    this.cookieService.set("language", language, 365); // 365 days expiration
  }

  getLanguage(): string {
    return this.cookieService.get("language") || "en"; // Default language
  }

  deleteLanguage() {
    this.cookieService.delete("language");
  }

  getVisitorLocation() {
    return this.http.get(this.apiURL);
  }

  setVisitor(visitor: string) {
    this.cookieService.set("visitor", visitor, 1); // 365 days expiration
  }

  getVisitor(): any {
    return this.cookieService.get("visitor") || undefined; // Default language
  }

  deleteVisitor() {
    this.cookieService.delete("visitor");
  }

  saveVisitor(visitor: any) {
    console.log(visitor);

    const formData = new FormData();
    formData.append("ip_address", visitor.ip);
    formData.append("country_name", visitor.country_name);
    formData.append("country_code", visitor.country);
    formData.append("city", visitor.city);
    formData.append("region", visitor.region);
    formData.append("link_visited", visitor.city);
    formData.append("lat", visitor.latitude);
    formData.append("long", visitor.longitude);

    // console.log(formData)

    return this.http.post<any>(`${this.url}visitors/`, formData, {
      // headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }
}
