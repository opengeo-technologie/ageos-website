import { HttpEventType } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import slugify from "slugify";
import { AdminServiceService } from "src/app/admin/admin-service.service";
import { ApiPublicConnectService } from "src/app/public/api-public-connect.service";
declare var M: any;

@Component({
  selector: "app-detail-service-content",
  templateUrl: "./detail-service-content.component.html",
  styleUrl: "./detail-service-content.component.css",
})
export class DetailServiceContentComponent {
  serviceContent: any | undefined;
  modalInstance: any;
  banner_image_edit: any = "";
  imageToModifyId: any;
  ImageToModifyUrl: any;
  data_to_delete: any;
  newImage: any;
  imageUrl: any = ApiPublicConnectService.imageUrl;
  isAddImage: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminServiceService
  ) {}

  ngOnInit() {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.serviceContent = stateData;
    // console.log(stateData);

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
    // const slug = slugify(item.name, {
    //   lower: true, // convert to lowercase
    //   strict: true, // remove special characters
    // });
    this.router.navigate(["admin/service/content/edit/", item.id], {
      state: { data: item },
    });
  }

  returnToContentPage(item: any) {
    this.router.navigate(["admin/service/content", item.content_service.slug], {
      state: { data: item.content_service },
    });
  }

  openModalDelete() {
    this.modalInstance[1].open();
  }

  openModalAddImage() {
    this.isAddImage = true;
    this.modalInstance[0].open();
  }

  openModalUpdateImage(item: any) {
    this.isAddImage = false;
    this.imageToModifyId = item.id;
    this.modalInstance[0].open();
  }

  openModalDeleteImage(item: any) {
    this.imageToModifyId = item.id;
    this.modalInstance[2].open();
  }

  openModalEditImage(image_id: any, url: any) {
    this.imageToModifyId = image_id;
    this.ImageToModifyUrl = url;
    this.modalInstance[0].open();
  }

  // openModalDeleteImage(image_id: any, url: any) {
  //   this.imageToModifyId = image_id;
  //   this.ImageToModifyUrl = url;
  //   this.modalInstance[1].open();
  // }

  updateImage() {
    const fileInput = document.getElementById("image") as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.newImage = fileInput.files[0];
      this.adminService
        .updateServiceImage(this.serviceContent.id, this.newImage)
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
            this.router.navigate(["/admin/services"]);
          }
        });
    }
  }

  refreshPage() {
    location.reload();
  }

  saveUpdateServiceContent() {
    const item_to_add_update = {
      id: null,
      service_content_id: this.serviceContent.id,
      isAddImage: this.isAddImage,
    };

    let image: any;
    // console.log(this.news.image_1)
    const fileInput = document.getElementById("image") as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      image = fileInput.files[0];
      if (this.isAddImage) {
        this.adminService
          .saveUpdateServiceContentImage(item_to_add_update, image)
          .subscribe((event) => {
            // console.log(response.body)
            if (event.type === HttpEventType.Response) {
              M.toast({
                html: "Data added successfully....",
                classes: "rounded green accent-4",
                inDuration: 500,
                outDuration: 575,
              });
              this.modalInstance[1].close();
              this.router.navigate(
                [
                  "admin/service/content",
                  this.serviceContent.content_service.slug,
                ],
                {
                  state: { data: this.serviceContent.content_service },
                }
              );
            }
          });
      } else {
        item_to_add_update["id"] = this.imageToModifyId;
        this.adminService
          .saveUpdateServiceContentImage(item_to_add_update, image)
          .subscribe((event) => {
            // console.log(response.body)
            if (event.type === HttpEventType.Response) {
              M.toast({
                html: "Data added successfully....",
                classes: "rounded green accent-4",
                inDuration: 500,
                outDuration: 575,
              });
              this.modalInstance[1].close();
              this.router.navigate(
                [
                  "admin/service/content",
                  this.serviceContent.content_service.slug,
                ],
                {
                  state: { data: this.serviceContent.content_service },
                }
              );
            }
          });
      }
    }
  }

  deleteServiceContent() {
    const item_to_delete = {
      service_id: this.serviceContent.id,
    };

    // console.log(this.serviceContent);

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
        this.modalInstance[1].close();
        this.router.navigate(
          ["admin/service/content", this.serviceContent.content_service.slug],
          {
            state: { data: this.serviceContent.content_service },
          }
        );
      });
  }

  deleteServiceContentImage() {
    const item_to_delete = {
      image_id: this.imageToModifyId,
    };

    // console.log(this.serviceContent);

    this.adminService
      .deleteServiceContentImage(item_to_delete)
      .subscribe((event) => {
        // console.log(response.body)
        M.toast({
          html: "Data deleted successfully....",
          classes: "rounded red accent-4",
          inDuration: 500,
          outDuration: 575,
        });
        this.modalInstance[2].close();
        this.router.navigate(
          ["admin/service/content", this.serviceContent.content_service.slug],
          {
            state: { data: this.serviceContent.content_service },
          }
        );
      });
  }
}
