import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
})
export class LoginFormComponent {
  credentials = { email: "", password: "" };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe((res) => {
      this.authService.saveTokens(res.access, res.refresh);
      this.router.navigate(["/admin/dashboard"]);
    });
  }
}
