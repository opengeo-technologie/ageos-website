import { Component } from "@angular/core";
import { Router } from "@angular/router";
import slugify from "slugify";
import { ApiPublicConnectService } from "src/app/public/api-public-connect.service";
import { AdminServiceService } from "../../admin-service.service";
declare var M: any;

@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrl: "./service.component.css",
})
export class ServiceComponent {
  items: any[] = [];
  isLoading: boolean = true;
  imageUrl: any = ApiPublicConnectService.imageUrl;
  modalInstance: any;
  data_to_delete: any;
  currentPage = 1;
  rowsPerPage = 5;

  constructor(
    private router: Router,
    private adminService: AdminServiceService,
    private mainService: ApiPublicConnectService
  ) {}

  ngOnInit(): void {
    this.loadData();
    const elems = document.querySelectorAll(".modal");
    this.modalInstance = M.Modal.init(elems, {
      dismissible: false, // Prevent modal from closing by clicking outside or pressing Escape
    });
  }

  loadData() {
    // Replace this with actual API call to fetch data
    this.mainService.getServices().subscribe((data: any) => {
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
    return Math.ceil(this.items.length / this.rowsPerPage);
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

  addChief(item: any) {
    this.router.navigate(["admin/chef-service/add"], {
      state: { data: item },
    });
  }

  detail(item: any) {
    this.router.navigate(["admin/service/detail", item.slug], {
      state: { data: item },
    });
  }

  edit(item: any) {
    // const slug = slugify(item.name, {
    //   lower: true, // convert to lowercase
    //   strict: true, // remove special characters
    // });
    this.router.navigate(["admin/service/edit", item.slug], {
      state: { data: item },
    });
  }

  openModalDelete(item: any) {
    this.data_to_delete = item;
    console.log(this.data_to_delete);
    this.modalInstance[0].open();
  }

  deleteService() {
    const item_to_delete = {
      chief_id: null,
      service_id: this.data_to_delete.id,
    };
    if (this.data_to_delete.chief_in_post) {
      item_to_delete.chief_id = this.data_to_delete.chief_in_post.id;
    }

    this.adminService.deleteService(item_to_delete).subscribe((event) => {
      // console.log(response.body)
      M.toast({
        html: "Data deleted successfully....",
        classes: "rounded red accent-4",
        inDuration: 500,
        outDuration: 575,
      });
      this.router.navigate([this.router.url]);
    });
  }
}
