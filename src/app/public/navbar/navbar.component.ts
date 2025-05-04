import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ScreenSizeService } from "src/app/screen-size.service";
import { ApiPublicConnectService } from "../api-public-connect.service";
import { AppCookieService } from "../cookie.service";
declare var M: any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  screenWidth: number;
  screenHeight: number;
  menus: any[] = [];
  isEnglish: boolean = false;
  selectedLanguage: string = "";
  services: any[] = [
    {
      id: 1,
      name: "Service de réception directe des données",
      abbreviation: "SRD",
    },
    { id: 2, name: "Service Système d'Information", abbreviation: "SI" },
    // {id: 3, name: "Service Technique", abbreviation: "ST",},
    { id: 4, name: "Service Forêt", abbreviation: "SF" },
    { id: 5, name: "Service Thématiques Prioritaires", abbreviation: "STP" },
    // {id: 6, name: "Service Surveillance Maritime", abbreviation: "SM"},
    {
      id: 7,
      name: "Service Suivi et Evaluation des Politiques Publiques",
      abbreviation: "SEPP",
    },
    // {id: 8, name: "Service Marketing et Commerce", abbreviation: "MC"},
    // {id: 9, name: "Service Partenariats et Affaires Juridiques", abbreviation: "PAJ"},
    // {id: 10, name: "Service Financements et Suivi des Projets"},
    // {id: 11, name: "Service Finances", abbreviation: "SFI"},
    // {id: 12, name: "Service Administratif", abbreviation: "SA"},
    // {id: 13, name: "Service Patrimoine", abbreviation: "SP"},
  ];

  projects: any[] = [
    { id: 1, name: "Central African Forest Initiative (CAFI)" },
    { id: 2, name: "OSFACO" },
    { id: 3, name: "RARS" },
    { id: 4, name: "GMES & AFRICA" },
    { id: 5, name: "SUMAG" },
  ];

  languages: any[] = [
    { id: 1, name: "Français", flag: "../../../assets/images/lang/french.png" },
    { id: 1, name: "Anglais", flag: "../../../assets/images/lang/british.png" },
  ];

  constructor(
    private screenSizeService: ScreenSizeService,
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
    this.loadMenus();
    if (this.screenWidth <= 500) {
      var dropdowns = document.querySelectorAll(".small-screen");

      const optionsDropdown = {
        autoTrigger: false,
        coverTrigger: false,
        constrainWidth: false,
        // hover: true
      };
      var instances = M.Dropdown.init(dropdowns, optionsDropdown);
    } else {
      var dropdowns = document.querySelectorAll(".large-screen");

      const optionsDropdown = {
        autoTrigger: false,
        coverTrigger: false,
        constrainWidth: false,
        hover: true,
      };
      var instances = M.Dropdown.init(dropdowns, optionsDropdown);
    }

    var elem = document.querySelectorAll(".sidenav");
    var options1 = {
      preventScrolling: false,
      isOpen: true,
    };
    var instancesSideNav = M.Sidenav.init(elem, options1);
  }

  ngAfterViewInit(): void {
    // Initialize the dropdown after the view has been rendered.
    setTimeout(() => {
      this.screenSizeService.screenSize$.subscribe((size) => {
        this.screenWidth = size.width;
        this.screenHeight = size.height;
      });
      // console.log(this.screenWidth);
      if (this.screenWidth <= 500) {
        var dropdowns = document.querySelectorAll(".small-screen");

        const optionsDropdown = {
          autoTrigger: false,
          coverTrigger: false,
          constrainWidth: false,
          // hover: true
        };
        var instances = M.Dropdown.init(dropdowns, optionsDropdown);
      } else {
        var dropdowns = document.querySelectorAll(".large-screen");

        const optionsDropdown = {
          autoTrigger: false,
          coverTrigger: false,
          constrainWidth: false,
          hover: true,
        };
        var instances = M.Dropdown.init(dropdowns, optionsDropdown);
      }
    }, 3000);
  }

  loadMenus() {
    // Replace this with actual API call to fetch data
    this.mainService.getMenus().subscribe((data: any) => {
      // console.log(data)
      this.menus = data;
    });
  }

  moveToService(id: any) {
    const selectedService = this.services.find((el) => el.id == id);
    // console.log(selectedService)
    this.router.navigate(["/services"], {
      queryParams: { id: btoa(selectedService.id) },
    });
  }

  moveToProject(id: any) {
    const selectedProject = this.projects.find((el) => el.id == id);
    // console.log(selectedService)
    this.router.navigate(["/projects"], {
      queryParams: { id: btoa(selectedProject.id) },
    });
  }

  isBlank(str: string) {
    return !str || /^\s*$/.test(str);
  }

  language(event: any) {
    this.cookieService.setLanguage(event.target.value);
    console.log(this.selectedLanguage);
    if (event.target.value == "en") {
      this.isEnglish = true;
    } else {
      this.isEnglish = false;
    }
    location.reload();
  }
}
