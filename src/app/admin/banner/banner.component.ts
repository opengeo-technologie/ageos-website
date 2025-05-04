import { Component } from "@angular/core";
import { Router } from "@angular/router";
import slugify from "slugify";
import { ApiPublicConnectService } from "src/app/public/api-public-connect.service";
declare var M: any;

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent {
  banners: any[] = [];
  isLoading: boolean = true;
  imageUrl: any = ApiPublicConnectService.imageUrl;

  currentPage = 1;
  rowsPerPage = 5;

  constructor(
    private router: Router,
    private mainService: ApiPublicConnectService
  ) {}

  ngOnInit(): void {
    this.loadMainBanner();
  }

  loadMainBanner() {
    // Replace this with actual API call to fetch data
    this.mainService.getMainBanners().subscribe((data: any) => {
      // console.log(data)
      this.banners = data;
      this.isLoading = false;
      setTimeout(() => {
        const elems = document.querySelectorAll(".materialboxed");
        M.Materialbox.init(elems); // Initialize materialbox
      });
    });
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    return this.banners.slice(start, start + this.rowsPerPage);
  }

  totalPages() {
    return Math.ceil(this.banners.length / this.rowsPerPage);
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

  detailBanner(banner: any) {
    const slug = slugify(banner.title, {
      lower: true, // convert to lowercase
      strict: true, // remove special characters
    });
    this.router.navigate(["admin/banner/detail", slug], {
      state: { data: banner },
    });
  }

  editBanner(banner: any) {
    const slug = slugify(banner.title, {
      lower: true, // convert to lowercase
      strict: true, // remove special characters
    });
    this.router.navigate(["admin/banner/edit", slug], {
      state: { data: banner },
    });
  }
}
