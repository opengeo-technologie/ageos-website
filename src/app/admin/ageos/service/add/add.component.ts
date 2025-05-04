import { Component } from "@angular/core";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrl: "./add.component.css",
})
export class AddServiceComponent {
  service: any = {
    name: "",
    description: "",
    department: null,
    banner_image: null,
  };
}
