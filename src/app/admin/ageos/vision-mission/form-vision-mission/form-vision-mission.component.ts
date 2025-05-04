import { HttpEventType } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AdminServiceService } from "src/app/admin/admin-service.service";
declare var M: any;

@Component({
  selector: "app-form-vision-mission",
  templateUrl: "./form-vision-mission.component.html",
  styleUrl: "./form-vision-mission.component.css",
})
export class FormVisionMissionComponent {
  @Input() mission: any | undefined;
  @Input() vision: any | undefined;
  @Input() page: any | undefined;
  description: string = "";
  isAddForm: boolean;

  constructor(
    private adminService: AdminServiceService,
    private router: Router
  ) {
    this.isAddForm = this.router.url.includes("add");
  }

  ngOnInit(): void {
    // console.log(this.isBlank(' '))
    if (!this.isAddForm) {
      // this.banner.image_1 = this.banner.images[0].image;
    }
  }

  isBlank(str: string) {
    return !str || /^\s*$/.test(str);
  }

  onSubmit() {
    if (this.isAddForm) {
      if (this.page == "mission") {
        let image: any;
        const fileInput = document.getElementById("image") as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          image = fileInput.files[0];
          // console.log(this.banner)
          this.adminService
            .saveMission(this.mission, image)
            .subscribe((event) => {
              // console.log(response.body)
              if (event.type === HttpEventType.Response) {
                // Handle the response from the server
                M.toast({
                  html: "Data created successfully....",
                  classes: "rounded green accent-4",
                  inDuration: 500,
                  outDuration: 575,
                });
                // this.loadItems();
                this.router.navigate(["/admin/vision-missions"]);
              }
            });
        }
      }

      if (this.page == "vision") {
        let image: any;
        const imageInput = document.getElementById("image") as HTMLInputElement;
        if (imageInput.files && imageInput.files[0]) {
          image = imageInput.files[0];
        }

        this.adminService.saveVision(this.vision, image).subscribe((event) => {
          // console.log(response.body)
          if (event.type === HttpEventType.Response) {
            // Handle the response from the server
            M.toast({
              html: "Data created successfully....",
              classes: "rounded green accent-4",
              inDuration: 500,
              outDuration: 575,
            });
            // this.loadItems();
            this.router.navigate(["/admin/vision-missions"]);
          }
        });
      }
    } else {
      if (this.page == "mission") {
        let image: any;
        const fileInput = document.getElementById("image") as HTMLInputElement;
        if (fileInput.files && fileInput.files[0]) {
          image = fileInput.files[0];
        }
        this.adminService
          .updateMission(this.mission, image)
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
              this.router.navigate(["/admin/vision-missions"]);
            }
          });
      }

      if (this.page == "vision") {
        let image: any;
        let file: any;
        const imageInput = document.getElementById("image") as HTMLInputElement;
        if (imageInput.files && imageInput.files[0]) {
          image = imageInput.files[0];
        }

        this.adminService
          .updateVision(this.vision, image)
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
              this.router.navigate(["/admin/vision-missions"]);
            }
          });
      }
    }
  }
}
