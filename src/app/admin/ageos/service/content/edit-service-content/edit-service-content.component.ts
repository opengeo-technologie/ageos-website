import { Component } from "@angular/core";

@Component({
  selector: "app-edit-service-content",
  templateUrl: "./edit-service-content.component.html",
  styleUrl: "./edit-service-content.component.css",
})
export class EditServiceContentComponent {
  serviceContent: any | undefined;

  ngOnInit(): void {
    // Get state data
    const service = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.serviceContent = service;
    // console.log(service);
  }
}
