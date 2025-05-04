import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth.service";
declare var M: any;

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.css"],
})
export class AdminLayoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const elems = document.querySelectorAll(".sidenav");
    var options = {};
    M.Sidenav.init(elems, options);

    var collapsible = document.querySelectorAll(".collapsible");
    var collapsibleInstance = M.Collapsible.init(collapsible);
  }

  logout() {
    this.authService.logout();
  }
}
