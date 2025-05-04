import { Component } from "@angular/core";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrl: "./edit.component.css",
})
export class EditServiceComponent {
  service: any | undefined;

  ngOnInit(): void {
    // Get state data
    const service = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.service = service;
    // console.log(service);
  }
}
