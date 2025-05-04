import { HttpEventType } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ApiPublicConnectService } from "src/app/public/api-public-connect.service";
import { AdminServiceService } from "../../admin-service.service";
declare var M: any;

@Component({
  selector: "app-form-user",
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})
export class FormUserComponent {
  @Input() user: any | undefined;
  description: string = "";
  profils: any[] = [];
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
    this.adminService.getRoles().subscribe((data: any) => {
      // console.log(data);
      this.profils = data;
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
      this.adminService.saveUser(this.user).subscribe((event) => {
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
          this.router.navigate(["/admin/users"]);
        }
      });
    } else {
      this.adminService.updateUser(this.user).subscribe((event) => {
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
          this.router.navigate(["/admin/users"]);
        }
      });
    }
  }
}
