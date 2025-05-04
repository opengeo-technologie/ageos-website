import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiPublicConnectService } from "src/app/public/api-public-connect.service";
import { AdminServiceService } from "../../admin-service.service";
declare var M: any;

@Component({
  selector: "app-content-activity",
  templateUrl: "./content-activity.component.html",
  styleUrl: "./content-activity.component.css",
})
export class ContentActivityComponent {
  activities: any[] = [];
  labelActivity: any;
  idActivity: any;
  isLoading: boolean = true;
  imageUrl: any = ApiPublicConnectService.imageUrl;

  constructor(
    private router: Router,
    private adminService: AdminServiceService
  ) {}

  ngOnInit(): void {
    // this.loadData();
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.activities = stateData.contents;
    this.labelActivity = stateData.label;
    this.idActivity = stateData.id;
    this.isLoading = false;
    // console.log(this.activities);
  }

  // loadData() {
  //   // Replace this with actual API call to fetch data
  //   this.adminService.getOurServices().subscribe((data: any) => {
  //     console.log(data)
  //     this.activities = data;
  //     this.isLoading = false;
  //     setTimeout(() => {
  //       const elems = document.querySelectorAll('.materialboxed');
  //       M.Materialbox.init(elems); // Initialize materialbox
  //     });

  //   });
  // }

  detailActivity(activitiy: any) {
    this.router.navigate(
      ["admin/our-activities/content/detail", activitiy.slug],
      { state: { data: activitiy } }
    );
  }

  addActivity() {
    this.router.navigate(["/admin/our-activities/add/content"], {
      state: { data: this.idActivity },
    });
  }

  editActivity(activitiy: any) {
    this.router.navigate(
      ["admin/our-activities/content/edit", activitiy.slug],
      { state: { data: activitiy } }
    );
  }
}
