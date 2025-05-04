import { Component } from "@angular/core";
import { Router } from "@angular/router";
import slugify from "slugify";
import { ApiPublicConnectService } from "src/app/public/api-public-connect.service";
declare var M: any;

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent {
  projects: any[] = [];
  isLoading: boolean = true;
  imageUrl: any = ApiPublicConnectService.imageUrl;

  currentPage = 1;
  rowsPerPage = 5;

  constructor(
    private router: Router,
    private mainService: ApiPublicConnectService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    // Replace this with actual API call to fetch data
    this.mainService.getProjects().subscribe((data: any) => {
      console.log(data);
      this.projects = data;
      this.isLoading = false;
      setTimeout(() => {
        const elems = document.querySelectorAll(".materialboxed");
        M.Materialbox.init(elems); // Initialize materialbox
      });
    });
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    return this.projects.slice(start, start + this.rowsPerPage);
  }

  totalPages() {
    return Math.ceil(this.projects.length / this.rowsPerPage);
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

  detailProject(project: any) {
    const slug = slugify(project.title, {
      lower: true, // convert to lowercase
      strict: true, // remove special characters
    });
    this.router.navigate(["admin/project/detail", slug], {
      state: { data: project },
    });
  }

  contentProject(project: any) {
    const slug = slugify(project.title, {
      lower: true, // convert to lowercase
      strict: true, // remove special characters
    });
    this.router.navigate(["admin/project/content", slug], {
      state: { data: project },
    });
  }

  editProject(project: any) {
    console.log(project);
    const slug = slugify(project.title, {
      lower: true, // convert to lowercase
      strict: true, // remove special characters
    });
    this.router.navigate(["admin/project/edit", slug], {
      state: { data: project },
    });
  }
}
