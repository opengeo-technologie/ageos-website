import { Component } from "@angular/core";
import { ApiPublicConnectService } from "../api-public-connect.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AppCookieService } from "../cookie.service";

@Component({
  selector: "app-centre-peche",
  templateUrl: "./centre-peche.component.html",
  styleUrl: "./centre-peche.component.css",
})
export class CentrePecheComponent {
  imageUrl: any = ApiPublicConnectService.imageUrl;
  isEnglish: boolean = false;
  selectedLanguage: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private publicService: ApiPublicConnectService,
    private cookieService: AppCookieService
  ) {
    this.selectedLanguage = this.cookieService.getLanguage();
    if (this.selectedLanguage == "fr") {
      this.isEnglish = false;
    } else {
      this.isEnglish = true;
    }
  }
}
