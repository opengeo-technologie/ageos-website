import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, Subscription } from "rxjs";
import { ApiPublicConnectService } from "../api-public-connect.service";

@Component({
  selector: "app-service-content",
  templateUrl: "./service-content.component.html",
  styleUrls: ["./service-content.component.css"],
})
export class ServiceContentComponent implements OnInit {
  selectedService: any | undefined;
  imageUrl: any = ApiPublicConnectService.imageUrl;
  contents: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: ApiPublicConnectService
  ) {}

  ngOnInit(): void {
    // const id: string|null = this.route.snapshot.paramMap.get('id');
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.selectedService = stateData;
    // console.log(this.selectedService);
    this.loadData();
  }

  loadData() {
    // Replace this with actual API call to fetch data
    this.mainService
      .getServiceContentByService(this.selectedService.id)
      .subscribe((data: any) => {
        console.log(data);
        this.contents = data;
        // this.isLoading = false;
      });
  }

  // handleRouteChange() {
  //   const id: string | null = this.route.snapshot.queryParamMap.get("id");
  //   if (id) {
  //     this.selectedService = this.services.find((el) => el.id == +atob(id));
  //   }
  // }
}
