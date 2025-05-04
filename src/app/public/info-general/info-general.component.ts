import { Component } from "@angular/core";
import { ApiPublicConnectService } from "../api-public-connect.service";
import { Router } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { AppCookieService } from "../cookie.service";

@Component({
  selector: "app-info-general",
  templateUrl: "./info-general.component.html",
  styleUrls: ["./info-general.component.css"],
})
export class InfoGeneralComponent {
  motDG: any[] = [];
  decrets: any[] = [];
  keyFutures: any[] = [];
  isLoading: boolean = true;
  isEnglish: boolean = false;
  selectedLanguage: string = "";

  imageUrl: any = ApiPublicConnectService.imageUrl;

  constructor(
    private router: Router,
    private mainService: ApiPublicConnectService,
    private cookieService: AppCookieService
  ) {
    this.selectedLanguage = this.cookieService.getLanguage();
    if (this.selectedLanguage == "fr") {
      this.isEnglish = false;
    } else {
      this.isEnglish = true;
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadMotDG();
    this.loadDecret();
    this.loadKeyFutures();
    // console.log(AppComponent.isEnglish);
  }

  loadMotDG() {
    // Replace this with actual API call to fetch data
    this.mainService.getMotDG().subscribe((data: any) => {
      // console.log(data)
      this.motDG = data;
      this.isLoading = false;
    });
  }

  loadDecret() {
    // Replace this with actual API call to fetch data
    this.mainService.getDecret().subscribe((data: any) => {
      // console.log(data)
      this.decrets = data;
      this.isLoading = false;
    });
  }

  loadKeyFutures() {
    // Replace this with actual API call to fetch data
    this.mainService.getKeyFigure().subscribe((data: any) => {
      // console.log(data)
      this.keyFutures = data;
      this.isLoading = false;
    });
  }
}
