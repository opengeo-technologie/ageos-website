import { HttpEventType } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AdminServiceService } from "src/app/admin/admin-service.service";
import { ApiPublicConnectService } from "src/app/public/api-public-connect.service";
declare var M: any;

@Component({
  selector: "app-form-service",
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})
export class FormServiceComponent {
  @Input() service: any | undefined;
  description: string = "";
  directions: any[] = [];
  isAddForm: boolean;

  constructor(
    private adminService: AdminServiceService,
    private mainService: ApiPublicConnectService,
    private router: Router
  ) {
    this.isAddForm = this.router.url.includes("add");
  }

  ngOnInit(): void {
    this.loadDirections();
  }

  loadDirections() {
    // Replace this with actual API call to fetch data
    this.mainService.getDirections().subscribe((data: any) => {
      // console.log(data);
      this.directions = data;
    });
  }

  isBlank(str: string) {
    return !str || /^\s*$/.test(str);
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id && c1.type === c2.type : c1 === c2;
  }

  onSubmit() {
    if (this.isAddForm) {
      let image: any;
      let banner_image: any;
      const fileInput = document.getElementById("image") as HTMLInputElement;
      const fileInput1 = document.getElementById(
        "banner_image"
      ) as HTMLInputElement;

      // console.log(this.direction);
      if (fileInput1.files && fileInput1.files[0]) {
        banner_image = fileInput1.files[0];
        // this.service.banner_image = banner_image;
        if (fileInput.files && fileInput.files[0]) {
          image = fileInput.files[0];

          let chef = {
            name: this.service.nom_chef,
            picture: image,
          };
          console.log(chef.name);

          this.adminService.saveService(this.service, chef, banner_image);
        } else {
          let chef = {
            name: this.service.nom_chef,
            picture: null,
          };
          console.log(this.service.nom_chef);

          this.adminService.saveService(this.service, chef, banner_image);
        }
      }
    } else {
      this.adminService.updateService(this.service).subscribe((event) => {
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
}
