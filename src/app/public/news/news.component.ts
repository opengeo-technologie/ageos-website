import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiPublicConnectService } from "../api-public-connect.service";
import slugify from "slugify";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
})
export class NewsComponent {
  allNews: any[] = [];
  currentPage = 1;
  rowsPerPage = 12;

  imageUrl: any = ApiPublicConnectService.imageUrl;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    // console.log("State Data:", stateData);
    this.allNews = stateData;
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    return this.allNews.slice(start, start + this.rowsPerPage);
  }

  totalPages() {
    return Math.ceil(this.allNews.length / this.rowsPerPage);
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
}
