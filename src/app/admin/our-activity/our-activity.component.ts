import { Component } from "@angular/core";
import { ApiPublicConnectService } from "src/app/public/api-public-connect.service";
import { AdminServiceService } from "../admin-service.service";
import { Router } from "@angular/router";
import slugify from "slugify";
declare var M: any;

@Component({
  selector: "app-our-activity",
  templateUrl: "./our-activity.component.html",
  styleUrl: "./our-activity.component.css",
})
export class OurActivityComponent {
  activities: any[] = [];
  isLoading: boolean = true;
  imageUrl: any = ApiPublicConnectService.imageUrl;

  constructor(
    private router: Router,
    private adminService: AdminServiceService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    // Replace this with actual API call to fetch data
    this.adminService.getOurServices().subscribe((data: any) => {
      // console.log(data);
      this.activities = data;
      this.isLoading = false;
      setTimeout(() => {
        const elems = document.querySelectorAll(".materialboxed");
        M.Materialbox.init(elems); // Initialize materialbox
      });
    });
  }

  detailActivity(activitiy: any) {
    this.router.navigate(["admin/our-activities/detail", activitiy.slug], {
      state: { data: activitiy },
    });
  }

  editActivity(activitiy: any) {
    this.router.navigate(["admin/our-activities/edit", activitiy.slug], {
      state: { data: activitiy },
    });
  }

  contentActivity(activitiy: any) {
    this.router.navigate(["admin/our-activities/content", activitiy.slug], {
      state: { data: activitiy },
    });
  }
}
