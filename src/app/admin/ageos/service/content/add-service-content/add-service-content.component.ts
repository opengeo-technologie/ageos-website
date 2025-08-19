import { Component } from "@angular/core";

@Component({
  selector: "app-add-service-content",
  templateUrl: "./add-service-content.component.html",
  styleUrl: "./add-service-content.component.css",
})
export class AddServiceContentComponent {
  serviceContent: any = {
    content: "",
    content_eng: "",
    image_1: null,
    image_2: null,
    service: null,
  };

  ngOnInit(): void {
    // Get state data
    const service = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.serviceContent.service = service;
    // console.log(service);
  }
}
