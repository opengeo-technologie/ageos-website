import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiPublicConnectService } from "../api-public-connect.service";
import { AppCookieService } from "../cookie.service";

@Component({
  selector: "app-vision-mission",
  templateUrl: "./vision-mission.component.html",
  styleUrls: ["./vision-mission.component.css"],
})
export class VisionMissionComponent {
  missions: any[] = [];
  visions: any[] = [];
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
    this.loadMissions();
    this.loadVision();
    this.loadDecret();
    this.loadKeyFutures();
  }

  loadMissions() {
    // Replace this with actual API call to fetch data
    this.mainService.getMission().subscribe((data: any) => {
      // console.log(data)
      this.missions = data;
      this.isLoading = false;
    });
  }

  loadVision() {
    // Replace this with actual API call to fetch data
    this.mainService.getVision().subscribe((data: any) => {
      // console.log(data)
      this.visions = data;
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
