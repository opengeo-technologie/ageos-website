import { Component } from "@angular/core";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrl: "./edit.component.css",
})
export class EditComponent {
  areaInterest: any | undefined;

  ngOnInit(): void {
    // Get state data
    const areaInterest = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.areaInterest = areaInterest;
  }
}
