import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiPublicConnectService } from "../api-public-connect.service";
import { AppCookieService } from "../cookie.service";

@Component({
  selector: "app-organigramme",
  templateUrl: "./organigramme.component.html",
  styleUrls: ["./organigramme.component.css"],
})
export class OrganigrammeComponent implements OnInit {
  directions: any[] = [];
  imageUrl: any = ApiPublicConnectService.imageUrl;
  isEnglish: boolean = false;
  selectedLanguage: string = "";

  services: any[] = [
    {
      id: 1,
      name: "Service de réception directe des données",
      abbreviation: "SRD",
      direction: 1,
      image: "../../../assets/images/services/DJI_0004-1536x1151.jpg",
    },
    {
      id: 2,
      name: "Service Système d'Information",
      abbreviation: "SI",
      direction: 1,
      image:
        "../../../assets/images/services/Service-systeme-info-1536x922.jpg",
    },
    {
      id: 3,
      name: "Service Technique",
      abbreviation: "ST",
      direction: 1,
      image: "../../../assets/images/services/DJI_0004-1536x1151.jpg",
    },
    {
      id: 4,
      name: "Service Forêt",
      abbreviation: "SF",
      direction: 2,
      image: "../../../assets/images/services/ADAHEN-1536x1152.jpg",
    },
    {
      id: 5,
      name: "Service Thématiques Prioritaires",
      abbreviation: "STP",
      direction: 2,
      image: "../../../assets/images/services/Thematiques-prioritaires.png",
    },
    {
      id: 6,
      name: "Service Surveillance Maritime",
      abbreviation: "SM",
      direction: 2,
      image: "../../../assets/images/services/Surveillance-maritime.jpg",
    },
    {
      id: 7,
      name: "Service Suivi et Evaluation des Politiques Publiques",
      abbreviation: "SEPP",
      direction: 3,
      image:
        "../../../assets/images/services/evaluation-des-politiques-publiques.png",
    },
    {
      id: 8,
      name: "Service Marketing et Commerce",
      abbreviation: "MC",
      direction: 3,
      image: "../../../assets/images/services/communication_marketing.gif",
    },
    {
      id: 9,
      name: "Service Partenariats et Affaires Juridiques",
      abbreviation: "PAJ",
      direction: 3,
      image: "../../../assets/images/services/Service-juridique.jpg",
    },
    {
      id: 10,
      name: "Service Financements et Suivi des Projets",
      abbreviation: "FSP",
      direction: 3,
      image: "../../../assets/images/services/financements-projets.jpeg",
    },
    {
      id: 11,
      name: "Service Finances",
      abbreviation: "SFI",
      direction: 4,
      image: "../../../assets/images/services/service-financier.jpg",
    },
    {
      id: 12,
      name: "Service Administratif",
      abbreviation: "SA",
      direction: 4,
      image: "../../../assets/images/services/service-administratif.png",
    },
    {
      id: 13,
      name: "Service Patrimoine",
      abbreviation: "SP",
      direction: 4,
      image: "../../../assets/images/services/gestion-patrimoine.jpg",
    },
  ];

  selectedIndex: number = 1;
  selectedDirection: any = {};
  selectedServices: any[] = [];

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

  ngOnInit(): void {
    this.loadDirections();
  }

  loadDirections() {
    // Replace this with actual API call to fetch data
    this.publicService.getDirections().subscribe((data: any) => {
      // console.log(data);
      this.directions = data;
      this.setActive(this.selectedIndex);
    });
  }

  setActive(id: number) {
    this.selectedIndex = id;
    this.selectedDirection = this.directions.find((el) => el.id == id);
    this.selectedServices = this.selectedDirection.services.filter(
      (el: any) => el.department == this.selectedIndex
    );
    // console.log(this.selectedDirection);
    // console.log(this.selectedServices);
  }

  moveToService(item: any) {
    // const selectedService = this.services.find((el) => el.id == id);
    this.router.navigate(["/services"], {
      queryParams: { id: btoa(item.id) },
      state: { data: item },
    });
  }
}
