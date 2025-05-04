import { AfterViewInit, Component, NgZone, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ScreenSizeService } from "src/app/screen-size.service";
import { ApiPublicConnectService } from "../api-public-connect.service";
import slugify from "slugify";
import { AppCookieService } from "../cookie.service";
declare var M: any;

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"],
})
export class MainPageComponent implements OnInit, AfterViewInit {
  instanceCarousel: any;
  screenWidth: number;
  screenHeight: number;
  menus: any[] = [];
  banners: any[] = [];
  mainActivities: any[] = [];
  areaOfInterest: any[] = [];
  partners: any[] = [];
  partnerGroups: any[][] = [];
  isEnglish: boolean = false;
  selectedLanguage: string = "";

  news: any[] = [];
  newsGroups: any[][] = [];

  imageUrl: any = ApiPublicConnectService.imageUrl;

  languages: any[] = [
    { id: 1, name: "Français", flag: "../../../assets/images/lang/french.png" },
    { id: 1, name: "Anglais", flag: "../../../assets/images/lang/british.png" },
  ];

  constructor(
    private screenSizeService: ScreenSizeService,
    private router: Router,
    private mainService: ApiPublicConnectService,
    private ngZone: NgZone,
    private cookieService: AppCookieService
  ) {
    this.selectedLanguage = this.cookieService.getLanguage();
    // this.cookieService.deleteVisitor();
    const visitor = this.cookieService.getVisitor();
    // console.log(visitor);
    if (!visitor) {
      this.cookieService.getVisitorLocation().subscribe((data: any) => {
        // console.log(data);
        this.cookieService.setVisitor(data);
        this.cookieService.saveVisitor(data).subscribe((data: any) => {
          // this.cookieService.setVisitor(data);
        });
      });
    } else {
    }
    if (this.selectedLanguage == "fr") {
      this.isEnglish = false;
    } else {
      this.isEnglish = true;
    }
  }

  ngOnInit(): void {
    // console.log(this.banners.length)
    this.loadMenus();
    this.loadMainBanner();
    this.loadMainActivities();
    this.loadAreaOfInterest();
    this.loadPartners();
    this.loadNews();

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

    this.initSlider();
  }

  initCarousel() {
    const carouselElements = document.querySelectorAll(".carousel");
    const options = {
      fullWidth: true,
      indicators: true,
      // duration: 800,
    };
    const instances = M.Carousel.init(carouselElements, options);
    this.autoplayCarousel(instances[0]);
  }

  autoplayCarousel(instance: any): void {
    setInterval(() => {
      instance.next();
    }, 5000); // Change slide every 2 seconds
  }

  initSlider() {
    var elems = document.querySelectorAll(".slider");
    M.Slider.init(elems, {
      indicators: true, // Dots that indicate each slide
      height: 400, // Slider height
      duration: 800, // Transition duration between slides (in ms)
      interval: 6000, // Interval between slide changes (in ms)
    });
  }

  loadMenus() {
    // Replace this with actual API call to fetch data
    this.mainService.getMenus().subscribe((data: any) => {
      // console.log(data)
      this.menus = data;
    });
  }

  loadMainBanner() {
    // Replace this with actual API call to fetch data
    this.mainService.getActiveMainBanners().subscribe((data: any) => {
      // console.log(data)
      this.banners = data;
      this.ngZone.run(() => {
        setTimeout(() => {
          this.initCarousel();
        });
      });
    });
  }

  loadMainActivities() {
    // Replace this with actual API call to fetch data
    this.mainService.getMainActivities().subscribe((data: any) => {
      // console.log(data)
      this.mainActivities = data;
    });
  }

  loadAreaOfInterest() {
    // Replace this with actual API call to fetch data
    this.mainService.getAreaOfInterest().subscribe((data: any) => {
      // console.log(data)
      this.areaOfInterest = data;
    });
  }

  loadPartners() {
    // Replace this with actual API call to fetch data
    this.mainService.getPartners().subscribe((data: any) => {
      // console.log(data)
      this.partners = data;
      this.partnerGroups = this.chunkArray(this.partners, 4);
      this.ngZone.run(() => {
        setTimeout(() => {
          this.initSlider();
        });
      });
    });
  }

  loadNews() {
    // Replace this with actual API call to fetch data
    this.mainService.getNews().subscribe((data: any) => {
      // console.log(data);
      this.news = data;
      this.sortNewsByDateDesc();
      this.newsGroups = this.chunkArray(this.news.slice(0, 16), 4);
      this.ngZone.run(() => {
        setTimeout(() => {
          this.initSlider();
        });
      });
    });
  }

  sortNewsByDateDesc() {
    this.news.sort((a, b) => {
      const date_A = new Date(a.start_date);
      const date_b = new Date(b.start_date);
      return date_b.getTime() - date_A.getTime();
    });
  }

  // Function to divide images into chunks of 4
  chunkArray(arr: any[], chunkSize: number): any[][] {
    let result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  // moveToService(id: any) {
  //   const selectedService = this.services.find((el) => el.id == id);
  //   this.router.navigate(["/services"], {
  //     queryParams: { id: btoa(selectedService.id) },
  //   });
  // }

  // moveToProject(id: any) {
  //   const selectedProject = this.projects.find((el) => el.id == id);
  //   // console.log(selectedService)
  //   this.router.navigate(["/projects"], {
  //     queryParams: { id: btoa(selectedProject.id) },
  //   });
  // }

  moveToNewsContent(news: any) {
    const slug = slugify(news.title, {
      lower: true, // convert to lowercase
      strict: true, // remove special characters
    });
    this.router.navigate(["/actualite"], {
      queryParams: { title: slug },
      state: { data: news },
    });
  }

  moveToNews() {
    console.log(this.news);
    this.router.navigate(["/actualites"], { state: { data: this.news } });
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
  }
}
