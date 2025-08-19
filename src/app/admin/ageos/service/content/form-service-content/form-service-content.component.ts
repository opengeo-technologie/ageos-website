import { HttpEventType } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import slugify from "slugify";
import { AdminServiceService } from "src/app/admin/admin-service.service";
import { ApiPublicConnectService } from "src/app/public/api-public-connect.service";
declare var M: any;

@Component({
  selector: "app-form-service-content",
  templateUrl: "./form-service-content.component.html",
  styleUrl: "./form-service-content.component.css",
})
export class FormServiceContentComponent {
  @Input() serviceContent: any | undefined;
  isAddForm: boolean;
  services: any[] = [];

  constructor(
    private adminService: AdminServiceService,
    private mainService: ApiPublicConnectService,
    private router: Router
  ) {
    this.isAddForm = this.router.url.includes("add");
  }

  ngOnInit(): void {
    this.loadServices();
    if (!this.isAddForm) {
      this.serviceContent.id = this.serviceContent.id;
      this.serviceContent.content = this.serviceContent.content;
      this.serviceContent.content_eng = this.serviceContent.content_eng;
      this.serviceContent.service = this.serviceContent.content_service;
    }
  }

  loadServices() {
    // Replace this with actual API call to fetch data
    this.mainService.getServices().subscribe((data: any) => {
      // console.log(data);
      this.services = data;
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id && c1.type === c2.type : c1 === c2;
  }

  isBlank(str: string) {
    return !str || /^\s*$/.test(str);
  }

  onSubmit() {
    if (this.isAddForm) {
      let images: any[] = [];
      // console.log(this.news.image_1)
      if (this.serviceContent.image_1 != "") {
        const fileInput = document.getElementById(
          "image_1"
        ) as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          images[0] = fileInput.files[0];
        }
      }
      if (this.serviceContent.image_2 != "") {
        const fileInput = document.getElementById(
          "image_2"
        ) as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          images[1] = fileInput.files[0];
        }
      }
      this.adminService
        .saveServiceContent(this.serviceContent, images)
        .subscribe((event) => {
          if (event.type === HttpEventType.Response) {
            // Handle the response from the server
            M.toast({
              html: "Data saved successfully....",
              classes: "rounded green accent-4",
              inDuration: 500,
              outDuration: 575,
            });
            this.router.navigate(
              ["admin/service/content", this.serviceContent.service.slug],
              {
                state: { data: this.serviceContent.service },
              }
            );
          }
        });
    } else {
      this.adminService
        .updateServiceContent(this.serviceContent)
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
            this.router.navigate(
              ["admin/service/content", this.serviceContent.service.slug],
              {
                state: { data: this.serviceContent.service },
              }
            );
          }
        });
    }
  }
}
