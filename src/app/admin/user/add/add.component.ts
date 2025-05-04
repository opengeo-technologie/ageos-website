import { Component } from "@angular/core";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrl: "./add.component.css",
})
export class AddUserComponent {
  user: any = {
    username: "",
    email: "",
    phone_number: "",
    password: "Ageos2025!",
    role: null,
    is_active: true,
  };
}
