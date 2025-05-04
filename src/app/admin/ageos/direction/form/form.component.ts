import { HttpEventType } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AdminServiceService } from "src/app/admin/admin-service.service";
declare var M: any;

@Component({
  selector: "app-form-direction",
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})
export class FormDirectionComponent {
  @Input() direction: any | undefined;
  description: string = "";
  isAddForm: boolean;

  constructor(
    private adminService: AdminServiceService,
    private router: Router
  ) {
    this.isAddForm = this.router.url.includes("add");
  }

  ngOnInit(): void {}

  isBlank(str: string) {
    return !str || /^\s*$/.test(str);
  }

  onSubmit() {
    if (this.isAddForm) {
      let image: any;
      const fileInput = document.getElementById("image") as HTMLInputElement;

      // console.log(this.direction);

      if (fileInput.files && fileInput.files[0]) {
        image = fileInput.files[0];

        let directeur = {
          name: this.direction.nom_dir,
          picture: image,
        };
        console.log(directeur.name);

        this.adminService.saveDirection(this.direction, directeur);
      } else {
        let directeur = {
          name: this.direction.nom_dir,
          picture: null,
        };
        console.log(directeur.name);

        this.adminService.saveDirection(this.direction, directeur);
      }
    } else {
      this.adminService.updateDirection(this.direction).subscribe((event) => {
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
          this.router.navigate(["/admin/directions"]);
        }
      });
    }
  }
}
