import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiPublicConnectService } from "../api-public-connect.service";
import { AppCookieService } from "../cookie.service";

@Component({
  selector: "app-our-service-content-details",
  templateUrl: "./our-service-content-details.component.html",
  styleUrls: ["./our-service-content-details.component.css"],
})
export class OurServiceContentDetailsComponent implements OnInit {
  imageUrl: any = ApiPublicConnectService.imageUrl;
  content: any | undefined;
  activity: any | undefined;
  isEnglish: boolean = false;
  selectedLanguage: string = "";
  selectedIndex: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    // console.log("State Data:", stateData);
    this.content = stateData;
    this.selectedIndex = this.content.id;

    this.activity = history.state.activity;
    // console.log(this.activity);
  }

  setActive(id: number) {
    this.selectedIndex = id;
    this.content = this.activity.contents.find((el: any) => el.id == id);
    // console.log(this.selectedDirection);
    // console.log(this.selectedServices);
  }
}
