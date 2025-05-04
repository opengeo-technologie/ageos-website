import { HttpEventType } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import slugify from "slugify";
import { AdminServiceService } from "src/app/admin/admin-service.service";
import { ApiPublicConnectService } from "src/app/public/api-public-connect.service";
declare var M: any;

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrl: "./detail.component.css",
})
export class DetailDirectionComponent {
  direction: any | undefined;
  modalInstance: any;
  imageToModifyId: any;
  ImageToModifyUrl: any;
  newImage: any;
  imageUrl: any = ApiPublicConnectService.imageUrl;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminServiceService
  ) {}

  ngOnInit() {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.direction = stateData;

    setTimeout(() => {
      var elems = document.querySelectorAll(".materialboxed");
      var instances = M.Materialbox.init(elems);
    }, 2000);

    const elems = document.querySelectorAll(".modal");
    this.modalInstance = M.Modal.init(elems, {
      dismissible: false, // Prevent modal from closing by clicking outside or pressing Escape
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

  addDirector() {
    this.router.navigate(["admin/director/add"], {
      state: { data: this.direction },
    });
  }

  editDirector(item: any) {
    const slug = slugify(item.name, {
      lower: true, // convert to lowercase
      strict: true, // remove special characters
    });
    this.router.navigate(["admin/director/edit", slug], {
      state: { direction: this.direction, director: item },
    });
  }

  openModalDelete() {
    this.modalInstance[1].open();
  }

  openModalEditImage(image_id: any, url: any) {
    this.imageToModifyId = image_id;
    this.ImageToModifyUrl = url;
    this.modalInstance[0].open();
  }

  openModalDeleteImage(image_id: any, url: any) {
    this.imageToModifyId = image_id;
    this.ImageToModifyUrl = url;
    this.modalInstance[1].open();
  }

  updateImage() {
    const fileInput = document.getElementById("image") as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.newImage = fileInput.files[0];
      this.adminService
        .updateBannerImage(this.direction.id, this.newImage)
        .subscribe((event) => {
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
            this.router.navigate(["/admin/banners"]);
          }
        });
    }
  }

  deleteDirector() {
    const item_to_delete = {
      director_id: this.direction.director_in_post.id,
      department_id: this.direction.id,
    };
    this.adminService.deleteDirector(item_to_delete).subscribe((event) => {
      // console.log(response.body)
      M.toast({
        html: "Data deleted successfully....",
        classes: "rounded red accent-4",
        inDuration: 500,
        outDuration: 575,
      });
      this.router.navigate(["/admin/directions"]);
    });
  }
}
