import { Component } from "@angular/core";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrl: "./edit.component.css",
})
export class EditChiefServiceComponent {
  chief: any | undefined;

  service: any | undefined;

  ngOnInit(): void {
    // Get state data
    const chief = history.state.chief; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.chief = chief;

    const service = history.state.service; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.service = service;
  }
}
