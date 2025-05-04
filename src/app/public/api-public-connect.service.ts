import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiPublicConnectService {
  // private url: string = "http://127.0.0.1:8000/api/";
  // public static imageUrl: string = "http://127.0.0.1:8000";
  public selectedLanguage: string = "fr";

  // private url: string = 'https://ageos-api.kais-consulting.com/api/';
  // public static imageUrl: string = 'https://ageos-api.kais-consulting.com';

  private url: string = "https://ageos.ga/api/";
  public static imageUrl: string = "https://ageos.ga";

  private headers = new HttpHeaders({
    "Content-Type": "application/json",
  });

  constructor(private http: HttpClient, private router: Router) {}

  getVisitors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}visitors/`);
  }

  getMenus(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}menus/`, { headers: this.headers });
  }

  getMainBanners(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}main-banner/`);
  }

  getActiveMainBanners(): Observable<any[]> {
    const status = true;
    return this.http.get<any[]>(`${this.url}main-banner/${status}`);
  }

  getMainActivities(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}main-activities/`);
  }

  getAreaOfInterest(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}area-expertise/`);
  }

  getPartners(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}partners/`);
  }

  getNews(): Observable<any[]> {
    const status = true;
    return this.http.get<any[]>(`${this.url}news/${status}`);
  }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}projects/`);
  }

  getDirections(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}departments/`);
  }

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}services/`);
  }

  getOurServiceBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.url}our_services/${slug}`);
  }

  getMotDG(): Observable<any> {
    return this.http.get<any>(`${this.url}mot-dg/`);
  }

  getDecret(): Observable<any> {
    return this.http.get<any>(`${this.url}decret-creation/`);
  }

  getKeyFigure(): Observable<any> {
    return this.http.get<any>(`${this.url}key-figure/`);
  }

  getMission(): Observable<any> {
    return this.http.get<any>(`${this.url}mission/`);
  }

  getVision(): Observable<any> {
    return this.http.get<any>(`${this.url}vision/`);
  }
}
