import { Component } from "@angular/core";
import { Router } from "@angular/router";
import slugify from "slugify";
import { AdminServiceService } from "src/app/admin/admin-service.service";
import { ApiPublicConnectService } from "src/app/public/api-public-connect.service";
declare var M: any;

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrl: "./content.component.css",
})
export class ContentComponent {
  items: any[] = [];
  isLoading: boolean = true;
  imageUrl: any = ApiPublicConnectService.imageUrl;
  modalInstance: any;
  data_to_delete: any;
  currentPage = 1;
  rowsPerPage = 5;

  service: any | undefined;

  constructor(
    private router: Router,
    private adminService: AdminServiceService,
    private mainService: ApiPublicConnectService
  ) {}

  ngOnInit(): void {
    const service = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.service = service;
    this.loadData();
    // console.log(this.router.url);
    const elems = document.querySelectorAll(".modal");
    this.modalInstance = M.Modal.init(elems, {
      dismissible: false, // Prevent modal from closing by clicking outside or pressing Escape
    });
  }

  loadData() {
    // Replace this with actual API call to fetch data
    this.adminService
      .getServiceContentByService(this.service.id)
      .subscribe((data: any) => {
        // console.log(data);
        this.items = data;
        this.isLoading = false;
      });
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    return this.items.slice(start, start + this.rowsPerPage);
  }

  totalPages() {
    if (this.items.length != 0) {
      return Math.ceil(this.items.length / this.rowsPerPage);
    } else {
      return 1;
    }
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

  add() {
    this.router.navigate(["admin/service/content/add"], {
      state: { data: this.service },
    });
  }

  detail(item: any) {
    this.router.navigate(["admin/service/content/detail", item.id], {
      state: { data: item },
    });
  }

  content(item: any) {
    this.router.navigate(["admin/service/content", item.slug], {
      state: { data: item },
    });
  }

  edit(item: any) {
    // const slug = slugify(item.name, {
    //   lower: true, // convert to lowercase
    //   strict: true, // remove special characters
    // });
    this.router.navigate(["admin/service/content/edit/", item.id], {
      state: { data: item },
    });
  }

  openModalDelete(item: any) {
    this.data_to_delete = item;
    // console.log(this.data_to_delete);
    this.modalInstance[0].open();
  }

  refreshPage() {
    location.reload();
  }

  deleteServiceContent() {
    const item_to_delete = {
      service_id: this.data_to_delete.id,
    };

    // console.log(item_to_delete);

    this.adminService
      .deleteServiceContent(item_to_delete)
      .subscribe((event) => {
        // console.log(response.body)
        M.toast({
          html: "Data deleted successfully....",
          classes: "rounded red accent-4",
          inDuration: 500,
          outDuration: 575,
        });
        this.modalInstance[0].close();
        this.loadData();
        // this.router.navigate([this.router.url]);
        // this.refreshPage();
      });
  }
}
