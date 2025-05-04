import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiPublicConnectService } from "src/app/public/api-public-connect.service";
import { AdminServiceService } from "../../admin-service.service";

@Component({
  selector: "app-vision-mission",
  templateUrl: "./vision-mission.component.html",
  styleUrl: "./vision-mission.component.css",
})
export class VisionMissionComponent {
  visions: any[] = [];
  missions: any[] = [];
  isLoading: boolean = false;
  imageUrl: any = ApiPublicConnectService.imageUrl;

  constructor(
    private router: Router,
    private adminService: AdminServiceService
  ) {}

  ngOnInit(): void {
    this.loadMission();
    this.loadVision();
  }

  loadMission() {
    // Replace this with actual API call to fetch data
    this.adminService.getMission().subscribe((data: any) => {
      // console.log(data)
      this.missions = data;
    });
  }

  loadVision() {
    // Replace this with actual API call to fetch data
    this.adminService.getVision().subscribe((data: any) => {
      // console.log(data)
      this.visions = data;
    });
  }

  addVision() {
    this.router.navigate(["/admin/vision-mission/add"], {
      state: { data: "vision" },
    });
  }
  addMission() {
    this.router.navigate(["/admin/vision-mission/add"], {
      state: { data: "mission" },
    });
  }

  editer(item: any, page: any) {
    this.router.navigate(["/admin/vision-mission/edit"], {
      state: { page: page, data: item },
    });
  }

  detail(item: any, page: any) {
    this.router.navigate(["/admin/vision-mission/detail"], {
      state: { page: page, data: item },
    });
  }
}
