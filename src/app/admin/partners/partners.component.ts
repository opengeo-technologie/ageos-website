import { Component } from "@angular/core";
import { Router } from "@angular/router";
import slugify from "slugify";
import { ApiPublicConnectService } from "src/app/public/api-public-connect.service";
declare var M: any;

@Component({
  selector: "app-partners",
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.css"],
})
export class PartnersComponent {
  partners: any[] = [];
  isLoading: boolean = true;
  imageUrl: any = ApiPublicConnectService.imageUrl;

  currentPage = 1;
  rowsPerPage = 5;

  constructor(
    private router: Router,
    private mainService: ApiPublicConnectService
  ) {}

  ngOnInit(): void {
    this.loadPartners();
  }

  loadPartners() {
    // Replace this with actual API call to fetch data
    this.mainService.getPartners().subscribe((data: any) => {
      // console.log(data)
      this.partners = data;
      this.isLoading = false;
      setTimeout(() => {
        const elems = document.querySelectorAll(".materialboxed");
        M.Materialbox.init(elems); // Initialize materialbox
      });
    });
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    return this.partners.slice(start, start + this.rowsPerPage);
  }

  totalPages() {
    return Math.ceil(this.partners.length / this.rowsPerPage);
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

  detailPartner(partner: any) {
    const slug = slugify(partner.name, {
      lower: true, // convert to lowercase
      strict: true, // remove special characters
    });
    this.router.navigate(["admin/partner/detail", slug], {
      state: { data: partner },
    });
  }

  editPartner(partner: any) {
    const slug = slugify(partner.name, {
      lower: true, // convert to lowercase
      strict: true, // remove special characters
    });
    this.router.navigate(["admin/partner/edit", slug], {
      state: { data: partner },
    });
  }
}
