import { Component } from "@angular/core";
import { Router } from "@angular/router";
import slugify from "slugify";
import { ApiPublicConnectService } from "src/app/public/api-public-connect.service";
import { AdminServiceService } from "../../admin-service.service";
declare var M: any;

@Component({
  selector: "app-direction",
  templateUrl: "./direction.component.html",
  styleUrl: "./direction.component.css",
})
export class DirectionComponent {
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
    this.mainService.getDirections().subscribe((data: any) => {
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

  addDirector(item: any) {
    this.router.navigate(["admin/director/add"], {
      state: { data: item },
    });
  }

  detail(item: any) {
    const slug = slugify(item.name, {
      lower: true, // convert to lowercase
      strict: true, // remove special characters
    });
    this.router.navigate(["admin/direction/detail", slug], {
      state: { data: item },
    });
  }

  edit(item: any) {
    const slug = slugify(item.name, {
      lower: true, // convert to lowercase
      strict: true, // remove special characters
    });
    this.router.navigate(["admin/direction/edit", slug], {
      state: { data: item },
    });
  }

  openModalDelete(item: any) {
    this.data_to_delete = item;
    console.log(this.data_to_delete);
    this.modalInstance[0].open();
  }

  deleteDirection() {
    const item_to_delete = {
      director_id: null,
      department_id: this.data_to_delete.id,
    };
    if (this.data_to_delete.director_in_post) {
      item_to_delete.director_id = this.data_to_delete.director_in_post.id;
    }

    this.adminService.deleteDirection(item_to_delete).subscribe((event) => {
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
