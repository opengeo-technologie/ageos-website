import { Component } from "@angular/core";

@Component({
  selector: "app-add-direction",
  templateUrl: "./add.component.html",
  styleUrl: "./add.component.css",
})
export class AddDirectionComponent {
  direction: any = {
    name: "",
    description: "",
  };
}
