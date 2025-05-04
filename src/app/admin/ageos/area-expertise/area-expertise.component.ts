import { Component } from "@angular/core";
import { Router } from "@angular/router";
import slugify from "slugify";
import { ApiPublicConnectService } from "src/app/public/api-public-connect.service";
declare var M: any;

@Component({
  selector: "app-area-expertise",
  templateUrl: "./area-expertise.component.html",
  styleUrl: "./area-expertise.component.css",
})
export class AreaExpertiseComponent {
  items: any[] = [];
  isLoading: boolean = true;
  imageUrl: any = ApiPublicConnectService.imageUrl;

  constructor(
    private router: Router,
    private mainService: ApiPublicConnectService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    // Replace this with actual API call to fetch data
    this.mainService.getAreaOfInterest().subscribe((data: any) => {
      // console.log(data)
      this.items = data;
      this.isLoading = false;
    });
  }

  detail(item: any) {
    const slug = slugify(item.title, {
      lower: true, // convert to lowercase
      strict: true, // remove special characters
    });
    this.router.navigate(["admin/domaines-competences/detail", slug], {
      state: { data: item },
    });
  }

  edit(item: any) {
    const slug = slugify(item.title, {
      lower: true, // convert to lowercase
      strict: true, // remove special characters
    });
    this.router.navigate(["admin/domaines-competences/edit", slug], {
      state: { data: item },
    });
  }
}
