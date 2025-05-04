import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiPublicConnectService } from "../api-public-connect.service";
import { AppCookieService } from "../cookie.service";

@Component({
  selector: "app-our-services",
  templateUrl: "./our-services.component.html",
  styleUrls: ["./our-services.component.css"],
})
export class OurServicesComponent implements OnInit {
  currentSlug: string = "";
  ourService: any;
  isEnglish: boolean = false;
  selectedLanguage: string = "";

  imageUrl: any = ApiPublicConnectService.imageUrl;

  constructor(
    private router: Router,
    private mainService: ApiPublicConnectService,
    private cookieService: AppCookieService
  ) {
    // console.log(this.router.url.substring(9));
    this.currentSlug = this.router.url.substring(9);
    this.selectedLanguage = this.cookieService.getLanguage();
    if (this.selectedLanguage == "fr") {
      this.isEnglish = false;
    } else {
      this.isEnglish = true;
    }
  }

  ngOnInit(): void {
    this.mainService
      .getOurServiceBySlug(this.currentSlug)
      .subscribe((data: any) => {
        // console.log(data);
        this.ourService = data;
      });
  }

  moveToDetails(item: any, main_slug: any) {
    console.log(main_slug);
    this.router.navigate(["/service-content", main_slug, item.slug], {
      state: { data: item, activity: this.ourService },
    });
  }
}
