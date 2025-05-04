import { HttpEventType } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AdminServiceService } from "src/app/admin/admin-service.service";
declare var M: any;

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})
export class FormComponent {
  @Input() item: any | undefined;
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
      this.adminService.saveAreaExpertise(this.item).subscribe((event) => {
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
          this.router.navigate(["/admin/domaines-competences"]);
        }
      });
    } else {
      this.adminService.updateAreaExpertise(this.item).subscribe((event) => {
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
          this.router.navigate(["/admin/domaines-competences"]);
        }
      });
    }
  }
}
