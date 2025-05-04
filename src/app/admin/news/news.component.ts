import { Component } from "@angular/core";
import { Router } from "@angular/router";
import slugify from "slugify";
import { ApiPublicConnectService } from "src/app/public/api-public-connect.service";
import { AdminServiceService } from "../admin-service.service";
import { HttpEventType } from "@angular/common/http";
declare var M: any;

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
})
export class NewsComponent {
  news: any[] = [];
  isLoading: boolean = true;
  isEnglish: boolean = false;
  modalInstance: any;
  changeNews: any = {};
  checkboxStatus: boolean;
  imageUrl: any = ApiPublicConnectService.imageUrl;

  currentPage = 1;
  rowsPerPage = 5;

  constructor(
    private router: Router,
    private mainService: ApiPublicConnectService,
    private adminService: AdminServiceService
  ) {}

  ngOnInit(): void {
    this.loadNews();
  }

  ngAfterViewInit() {
    const elems = document.querySelectorAll(".modal");
    this.modalInstance = M.Modal.init(elems, {
      dismissible: false, // Prevent modal from closing by clicking outside or pressing Escape
    });
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    return this.news.slice(start, start + this.rowsPerPage);
  }

  totalPages() {
    return Math.ceil(this.news.length / this.rowsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  loadNews() {
    // Replace this with actual API call to fetch data
    this.adminService.getNews().subscribe((data: any) => {
      // console.log(data);
      this.news = data;
      this.isLoading = false;
      this.sortNewsByDateDesc();
    });
  }

  sortNewsByDateDesc() {
    this.news.sort((a, b) => {
      const date_A = new Date(a.start_date);
      const date_b = new Date(b.start_date);
      return date_b.getTime() - date_A.getTime();
    });
  }

  isBlank(str: string) {
    return !str || /^\s*$/.test(str);
  }

  changeLanguage(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const isChecked = checkbox.checked;
    this.isEnglish = isChecked;
    // console.log("Checkbox value:", isChecked);
  }

  openModal(event: Event, news: any) {
    const checkbox = event.target as HTMLInputElement;
    const isChecked = checkbox.checked;
    // console.log("Checkbox value:", isChecked);
    this.changeNews = news;
    this.checkboxStatus = isChecked;
    this.modalInstance[0].open();
  }

  changeNewsStatus(news: any, status: boolean) {
    this.adminService.updateNewsStatus(news, status).subscribe((event) => {
      // console.log(response.body)
      if (event.type === HttpEventType.Response) {
        // Handle the response from the server
        M.toast({
          html: "Data updated successfully....",
          classes: "rounded green accent-4",
          inDuration: 500,
          outDuration: 575,
        });
        // this.loadItems();
        this.modalInstance[0].close();
        this.router.navigate(["/admin/news"]);
      }
    });
  }

  detailNews(news: any) {
    const slug = slugify(news.title, {
      lower: true, // convert to lowercase
      strict: true, // remove special characters
    });
    this.router.navigate(["admin/news/detail", slug], {
      state: { data: news },
    });
  }

  editNews(news: any) {
    const slug = slugify(news.title, {
      lower: true, // convert to lowercase
      strict: true, // remove special characters
    });
    this.router.navigate(["admin/news/edit", slug], { state: { data: news } });
  }
}
