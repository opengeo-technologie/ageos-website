import { HttpHeaders, HttpClient, HttpEventType } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
declare var M: any;

@Injectable({
  providedIn: "root",
})
export class AdminServiceService {
  // private url: string = "http://127.0.0.1:8000/api/";
  // public static imageUrl: string = "http://127.0.0.1:8000";

  private url: string = "https://ageos.ga/api/";
  public static imageUrl: string = "https://ageos.ga";

  private headers = new HttpHeaders({
    // 'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${localStorage.getItem("access")}`,
  });

  constructor(private http: HttpClient, private router: Router) {}

  getVisitors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}visitors`, {
      headers: this.headers,
    });
  }

  getMenus(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}menus/`, { headers: this.headers });
  }

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}roles/`, { headers: this.headers });
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}users/`, { headers: this.headers });
  }

  getMainBanners(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}main-banner/`, {
      headers: this.headers,
    });
  }

  getMainActivities(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}main-activities/`, {
      headers: this.headers,
    });
  }

  getAreaOfInterest(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}area-expertise/`, {
      headers: this.headers,
    });
  }

  getPartners(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}partners/`, {
      headers: this.headers,
    });
  }

  getNews(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}news/`, { headers: this.headers });
  }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}projects/`, {
      headers: this.headers,
    });
  }

  getOurServices(): Observable<any> {
    return this.http.get<any>(`${this.url}our_services/`, {
      headers: this.headers,
    });
  }

  getOurServiceBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${this.url}our_services/${slug}`, {
      headers: this.headers,
    });
  }

  getMotDG(): Observable<any> {
    return this.http.get<any>(`${this.url}mot-dg/`, { headers: this.headers });
  }

  getDecret(): Observable<any> {
    return this.http.get<any>(`${this.url}decret-creation/`, {
      headers: this.headers,
    });
  }

  getKeyFigure(): Observable<any> {
    return this.http.get<any>(`${this.url}key-figure/`, {
      headers: this.headers,
    });
  }

  getMission(): Observable<any> {
    return this.http.get<any>(`${this.url}mission/`, { headers: this.headers });
  }

  getVision(): Observable<any> {
    return this.http.get<any>(`${this.url}vision/`, { headers: this.headers });
  }

  saveUser(user: any) {
    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("username", user.username);
    formData.append("role", user.role.id);
    formData.append("phone_number", user.phone_number);
    formData.append("is_active", user.is_active);
    formData.append("password", user.password);

    // console.log(formData)

    return this.http.post<any>(`${this.url}users/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateUser(user: any) {
    const formData = new FormData();
    formData.append("id", user.user_id);
    formData.append("email", user.email);
    formData.append("username", user.username);
    formData.append("role", user.role.id);
    formData.append("phone_number", user.phone_number);

    // console.log(formData)

    return this.http.put<any>(`${this.url}users/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  saveNews(news: any, images: File[]) {
    const formData = new FormData();
    formData.append("title", news.title);
    formData.append("content", news.content);
    formData.append("title_eng", news.title_eng);
    formData.append("content_eng", news.content_eng);
    formData.append("start_date", news.start_date);
    formData.append("end_date", news.end_date);
    for (let index = 0; index < images.length; index++) {
      let i = index + 1;
      formData.append("image_" + i, images[index]);
    }

    // console.log(formData)

    return this.http.post<any>(`${this.url}news/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateNews(news: any) {
    const formData = new FormData();
    formData.append("id", news.id);
    formData.append("title", news.title);
    formData.append("content", news.content);
    formData.append("title_eng", news.title_eng);
    formData.append("content_eng", news.content_eng);
    formData.append("start_date", news.start_date);
    formData.append("end_date", news.end_date);

    // console.log(formData)

    return this.http.put<any>(`${this.url}news/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateNewsStatus(news: any, status: boolean) {
    const formData = new FormData();
    formData.append("id", news.id);
    formData.append("status", String(status));

    // console.log(formData)

    return this.http.put<any>(`${this.url}news/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  addNewsImage(news_id: any, image_file: File) {
    const formData = new FormData();
    formData.append("image", image_file);
    formData.append("news", news_id);

    // console.log(formData)

    return this.http.post<any>(`${this.url}news-image/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateNewsImage(image_id: any, image_file: File) {
    const formData = new FormData();
    formData.append("id", image_id);
    formData.append("image", image_file);

    // console.log(formData)

    return this.http.put<any>(`${this.url}news-image/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  deleteNewsImage(image_id: any) {
    // console.log(formData)

    return this.http.delete<any>(`${this.url}news-image/${image_id}`);
  }

  saveBanner(banner: any, image: File) {
    const formData = new FormData();
    formData.append("title", banner.title);
    formData.append("subtitle", banner.subtitle);
    formData.append("title_eng", banner.title_eng);
    formData.append("subtitle_eng", banner.subtitle_eng);
    formData.append("image", image);

    // console.log(formData)

    return this.http.post<any>(`${this.url}main-banner/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateBanner(banner: any) {
    const formData = new FormData();
    formData.append("id", banner.id);
    formData.append("title", banner.title);
    formData.append("subtitle", banner.subtitle);
    formData.append("title_eng", banner.title_eng);
    formData.append("subtitle_eng", banner.subtitle_eng);

    // console.log(formData)

    return this.http.put<any>(`${this.url}main-banner/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateBannerImage(banner_id: any, image_file: File) {
    const formData = new FormData();
    formData.append("id", banner_id);
    formData.append("image", image_file);

    // console.log(formData)

    return this.http.put<any>(`${this.url}main-banner/${banner_id}`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  savePartner(partner: any, image: File) {
    const formData = new FormData();
    formData.append("name", partner.name);
    formData.append("description", partner.description);
    formData.append("website", partner.website);
    formData.append("logo", image);

    // console.log(formData)

    return this.http.post<any>(`${this.url}partners/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updatPartner(partner: any) {
    const formData = new FormData();
    formData.append("id", partner.id);
    formData.append("name", partner.name);
    formData.append("description", partner.description);
    formData.append("website", partner.website);

    // console.log(formData)

    return this.http.put<any>(`${this.url}partners/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  saveProject(project: any, images: File[], logo: File, banner: File) {
    const formData = new FormData();
    formData.append("title", project.title);
    formData.append("description", project.description);
    formData.append("logo", logo);
    formData.append("banner", banner);
    formData.append("content", project.content);
    for (let index = 0; index < images.length; index++) {
      let i = index + 1;
      formData.append("image_" + i, images[index]);
    }

    // console.log(formData)

    return this.http.post<any>(`${this.url}projects/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateProject(project: any) {
    const formData = new FormData();
    formData.append("id", project.id);
    formData.append("title", project.title);
    formData.append("description", project.description);

    // console.log(formData)

    return this.http.put<any>(`${this.url}projects/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  saveProjectContent(project: any, projectContent: any, images: File[]) {
    // console.log(project)

    const formData = new FormData();
    formData.append("content", projectContent.content);
    formData.append("project", project.id);
    for (let index = 0; index < images.length; index++) {
      let i = index + 1;
      formData.append("image_" + i, images[index]);
    }

    // console.log(formData)

    return this.http.post<any>(`${this.url}project-content/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateProjectContent(projectContent: any) {
    console.log(projectContent);
    const formData = new FormData();
    formData.append("id", projectContent.id);
    formData.append("content", projectContent.content);

    // console.log(formData)

    return this.http.put<any>(`${this.url}project-content/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  saveOurActivity(activity: any, image: File) {
    // console.log(project)

    const formData = new FormData();
    formData.append("label", activity.label);
    formData.append("description", activity.description);
    formData.append("label_eng", activity.label_eng);
    formData.append("description_eng", activity.description_eng);
    formData.append("banner_image", image);

    // console.log(formData)

    return this.http.post<any>(`${this.url}our_services/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateOurActivity(activity: any) {
    // console.log(project)

    const formData = new FormData();
    formData.append("id", activity.id);
    formData.append("label", activity.label);
    formData.append("description", activity.description);
    formData.append("label_eng", activity.label_eng);
    formData.append("description_eng", activity.description_eng);
    // formData.append('banner_image', image);

    // console.log(formData)

    return this.http.put<any>(`${this.url}our_services/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  saveOurContentActivity(content: any, image: File) {
    // console.log(project)

    const formData = new FormData();
    formData.append("label", content.label);
    formData.append("description", content.description);
    formData.append("content", content.content);
    formData.append("label_eng", content.label_eng);
    formData.append("description_eng", content.description_eng);
    formData.append("content_eng", content.content_eng);
    formData.append("ourService", content.ourService);
    formData.append("banner_image", image);

    // console.log(formData)

    return this.http.post<any>(`${this.url}our_services_content/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateContentOurActivity(content: any) {
    // console.log(project)

    const formData = new FormData();
    formData.append("id", content.id);
    formData.append("label", content.label);
    formData.append("description", content.description);
    formData.append("content", content.content);
    formData.append("label_eng", content.label_eng);
    formData.append("description_eng", content.description_eng);
    formData.append("content_eng", content.content_eng);

    // console.log(formData)

    return this.http.put<any>(`${this.url}our_services_content/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  saveMotDG(mot: any, image: File) {
    // console.log(project)

    const formData = new FormData();
    formData.append("libelle", mot.libelle);
    formData.append("name", mot.name);
    formData.append("content", mot.content);
    formData.append("content_eng", mot.content_eng);
    formData.append("image", image);

    // console.log(formData)

    return this.http.post<any>(`${this.url}mot-dg/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateMotDG(mot: any, image: File) {
    // console.log(project)

    const formData = new FormData();
    formData.append("id", mot.id);
    formData.append("libelle", mot.libelle);
    formData.append("name", mot.name);
    formData.append("content", mot.content);
    formData.append("content_eng", mot.content_eng);
    if (image) {
      formData.append("image", image);
    }

    // console.log(formData)

    return this.http.put<any>(`${this.url}mot-dg/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  saveDecret(mot: any, image: File, file: File) {
    // console.log(project)

    const formData = new FormData();
    formData.append("libelle", mot.libelle);
    formData.append("content", mot.content);
    formData.append("libelle_eng", mot.libelle_eng);
    formData.append("content_eng", mot.content_eng);
    formData.append("image", image);
    if (file) {
      formData.append("file", file);
    }

    // console.log(formData)

    return this.http.post<any>(`${this.url}decret-creation/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateDecret(data: any, image: File, file: File) {
    // console.log(project)

    const formData = new FormData();
    formData.append("id", data.id);
    formData.append("libelle", data.libelle);
    formData.append("content", data.content);
    formData.append("libelle_eng", data.libelle_eng);
    formData.append("content_eng", data.content_eng);
    if (file) {
      formData.append("file", file);
    }
    if (image) {
      formData.append("image", image);
    }

    // console.log(formData)

    return this.http.put<any>(`${this.url}decret-creation/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  savekeyFigure(data: any) {
    // console.log(project)

    const formData = new FormData();
    formData.append("libelle", data.libelle);
    formData.append("libelle_eng", data.libelle_eng);
    // console.log(formData)

    return this.http.post<any>(`${this.url}key-figure/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updatekeyFigure(data: any) {
    // console.log(project)

    const formData = new FormData();
    formData.append("id", data.id);
    formData.append("libelle", data.libelle);
    formData.append("libelle_eng", data.libelle_eng);

    // console.log(formData)

    return this.http.put<any>(`${this.url}key-figure/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  saveMission(mot: any, image: File) {
    // console.log(project)

    const formData = new FormData();
    formData.append("libelle", mot.libelle);
    formData.append("content", mot.content);
    formData.append("libelle_eng", mot.libelle_eng);
    formData.append("content_eng", mot.content_eng);
    formData.append("image", image);

    // console.log(formData)

    return this.http.post<any>(`${this.url}mission/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateMission(mot: any, image: File) {
    // console.log(project)

    const formData = new FormData();
    formData.append("id", mot.id);
    formData.append("libelle", mot.libelle);
    formData.append("content", mot.content);
    formData.append("libelle_eng", mot.libelle_eng);
    formData.append("content_eng", mot.content_eng);
    if (image) {
      formData.append("image", image);
    }

    // console.log(formData)

    return this.http.put<any>(`${this.url}mission/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  saveVision(vision: any, image: File) {
    console.log(vision);

    const formData = new FormData();
    formData.append("libelle", vision.libelle);
    formData.append("content", vision.content);
    formData.append("libelle_eng", vision.libelle_eng);
    formData.append("content_eng", vision.content_eng);
    formData.append("image", image);

    // console.log(formData)

    return this.http.post<any>(`${this.url}vision/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateVision(mot: any, image: File) {
    // console.log(project)

    const formData = new FormData();
    formData.append("id", mot.id);
    formData.append("libelle", mot.libelle);
    formData.append("content", mot.content);
    formData.append("libelle_eng", mot.libelle_eng);
    formData.append("content_eng", mot.content_eng);
    if (image) {
      formData.append("image", image);
    }

    // console.log(formData)

    return this.http.put<any>(`${this.url}vision/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  saveAreaExpertise(area: any) {
    const formData = new FormData();
    formData.append("title", area.title);
    formData.append("description", area.description);
    formData.append("title_eng", area.title_eng);
    formData.append("description_eng", area.description_eng);
    formData.append("icon", area.icon);

    // console.log(formData)

    return this.http.post<any>(`${this.url}area-expertise/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateAreaExpertise(area: any) {
    // console.log(project)

    const formData = new FormData();
    formData.append("id", area.id);
    formData.append("title", area.title);
    formData.append("description", area.description);
    formData.append("title_eng", area.title_eng);
    formData.append("description_eng", area.description_eng);
    formData.append("icon", area.icon);

    // console.log(formData)

    return this.http.put<any>(`${this.url}area-expertise/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  saveDirection(direction: any, director: any) {
    const formData = new FormData();

    formData.append("name", direction.name);
    formData.append("description", direction.description);
    formData.append("name_eng", direction.name_eng);
    formData.append("description_eng", direction.description_eng);
    formData.append("abbreviation", direction.abbreviation);

    // console.log(director);

    this.http
      .post<any>(`${this.url}departments/`, formData, {
        headers: this.headers,
      })
      .subscribe((response) => {
        console.log(response);
        const formData_director = new FormData();
        if (director.name) {
          formData_director.append("name", director.name);
          formData_director.append("department_id", response["id"]);
          if (director.picture != null) {
            formData_director.append("picture", director.picture);
          }
          this.http
            .post<any>(`${this.url}directors/`, formData_director)
            .subscribe((response) => {
              M.toast({
                html: "Data updated successfully....",
                classes: "rounded green accent-4",
                inDuration: 500,
                outDuration: 575,
              });
              // this.loadItems();
              // this.router.navigate(["/admin/directions"]);
            });
        }
        M.toast({
          html: "Data updated successfully....",
          classes: "rounded green accent-4",
          inDuration: 500,
          outDuration: 575,
        });
        this.router.navigate(["/admin/directions"]);
      });
  }

  updateDirection(direction: any) {
    // console.log(project)

    const formData = new FormData();
    formData.append("id", direction.id);
    formData.append("name", direction.name);
    formData.append("description", direction.description);
    formData.append("name_eng", direction.name_eng);
    formData.append("description_eng", direction.description_eng);
    formData.append("abbreviation", direction.abbreviation);

    // console.log(formData)

    return this.http.put<any>(`${this.url}departments/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  deleteDirection(item: any) {
    const formData = new FormData();

    formData.append("director_id", item.director_id);
    formData.append("department_id", item.department_id);

    return this.http.request("DELETE", `${this.url}departments/`, {
      body: formData,
    });

    // return this.http.delete<any>(`${this.url}directors/`, formData);
  }

  saveDirector(director: any, image: File) {
    // console.log(director);
    const formData_director = new FormData();

    formData_director.append("name", director.name);
    formData_director.append("description", director.description);
    formData_director.append("department_id", director.department_id);
    if (image) {
      formData_director.append("picture", image);
    }
    return this.http.post<any>(`${this.url}directors/`, formData_director, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateDirector(director: any, image: File) {
    // console.log(director);
    const formData_director = new FormData();

    formData_director.append("id", director.id);
    formData_director.append("name", director.name);
    formData_director.append("description", director.description);
    if (image) {
      formData_director.append("picture", image);
    }
    return this.http.put<any>(`${this.url}directors/`, formData_director, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  deleteDirector(item: any) {
    const formData = new FormData();

    formData.append("director_id", item.director_id);
    formData.append("department_id", item.department_id);

    return this.http.request("DELETE", `${this.url}directors/`, {
      body: formData,
    });

    // return this.http.delete<any>(`${this.url}directors/`, formData);
  }

  saveService(service: any, chief: any, banner_image: File) {
    const formData = new FormData();

    formData.append("name", service.name);
    formData.append("description", service.description);
    formData.append("name_eng", service.name_eng);
    formData.append("description_eng", service.description_eng);
    formData.append("department", service.department.id);
    formData.append("abbreviation", service.abbreviation);
    formData.append("banner_image", banner_image);

    // console.log(director);

    this.http
      .post<any>(`${this.url}services/`, formData, {
        headers: this.headers,
      })
      .subscribe((response) => {
        console.log(chief);
        const formData_chief = new FormData();
        if (chief.name) {
          formData_chief.append("name", chief.name);
          formData_chief.append("service_id", response["id"]);
          if (chief.picture != null) {
            formData_chief.append("picture", chief.picture);
          }
          this.http
            .post<any>(`${this.url}chief-service/`, formData_chief)
            .subscribe((response) => {
              M.toast({
                html: "Data updated successfully....",
                classes: "rounded green accent-4",
                inDuration: 500,
                outDuration: 575,
              });
              // this.loadItems();
              // this.router.navigate(["/admin/directions"]);
            });
        }
        M.toast({
          html: "Data updated successfully....",
          classes: "rounded green accent-4",
          inDuration: 500,
          outDuration: 575,
        });
        this.router.navigate(["/admin/services"]);
      });
  }

  updateService(service: any) {
    // console.log(project)

    const formData = new FormData();
    formData.append("id", service.id);
    formData.append("name", service.name);
    formData.append("description", service.description);
    formData.append("name_eng", service.name_eng);
    formData.append("description_eng", service.description_eng);
    formData.append("department", service.department.id);
    formData.append("abbreviation", service.abbreviation);
    // console.log(formData)

    return this.http.put<any>(`${this.url}services/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateServiceImage(banner_id: any, image_file: File) {
    const formData = new FormData();
    formData.append("id", banner_id);
    formData.append("banner_image", image_file);

    // console.log(formData)

    return this.http.put<any>(`${this.url}services/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  deleteService(item: any) {
    const formData = new FormData();

    formData.append("chief_id", item.chief_id);
    formData.append("service_id", item.service_id);

    return this.http.request("DELETE", `${this.url}services/`, {
      body: formData,
    });

    // return this.http.delete<any>(`${this.url}directors/`, formData);
  }

  saveChief(chief: any, image: File) {
    // console.log(director);
    const formData = new FormData();

    formData.append("name", chief.name);
    formData.append("description", chief.description);
    formData.append("service_id", chief.service_id);
    if (image) {
      formData.append("picture", image);
    }
    return this.http.post<any>(`${this.url}chief-service/`, formData, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  updateChief(chief: any, image: File) {
    // console.log(director);
    const formData_director = new FormData();

    formData_director.append("id", chief.id);
    formData_director.append("name", chief.name);
    formData_director.append("description", chief.description);
    if (image) {
      formData_director.append("picture", image);
    }
    return this.http.put<any>(`${this.url}chief-service/`, formData_director, {
      headers: this.headers,
      reportProgress: true,
      observe: "events",
    });
  }

  deleteChief(item: any) {
    const formData = new FormData();

    formData.append("service_id", item.service_id);
    formData.append("chief_id", item.chief_id);

    return this.http.request("DELETE", `${this.url}chief-service/`, {
      body: formData,
    });

    // return this.http.delete<any>(`${this.url}directors/`, formData);
  }
}
