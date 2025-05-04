import { Component } from "@angular/core";

@Component({
  selector: "app-edit-vision-mission",
  templateUrl: "./edit-vision-mission.component.html",
  styleUrl: "./edit-vision-mission.component.css",
})
export class EditVisionMissionComponent {
  mission: any;

  vision: any;

  chiffre: any;

  page: any;

  ngOnInit(): void {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.page = history.state.page;
    if (this.page == "mission") {
      this.mission = stateData;
      this.mission.image = "";
    } else if (this.page == "vision") {
      this.vision = stateData;
    }
  }
}
