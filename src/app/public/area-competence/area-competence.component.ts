import { Component, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { ApiPublicConnectService } from "../api-public-connect.service";
import { AppCookieService } from "../cookie.service";

@Component({
  selector: "app-area-competence",
  templateUrl: "./area-competence.component.html",
  styleUrls: ["./area-competence.component.css"],
})
export class AreaCompetenceComponent {
  areaOfInterest: any[] = [];
  isEnglish: boolean = false;
  selectedLanguage: string = "";

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
    this.loadAreaOfInterest();
  }

  loadAreaOfInterest() {
    // Replace this with actual API call to fetch data
    this.mainService.getAreaOfInterest().subscribe((data: any) => {
      // console.log(data)
      this.areaOfInterest = data;
    });
  }
}
