import { Component } from "@angular/core";

@Component({
  selector: "app-add-vision-mission",
  templateUrl: "./add-vision-mission.component.html",
  styleUrl: "./add-vision-mission.component.css",
})
export class AddVisionMissionComponent {
  mission: any = {
    libelle: "",
    content: "",
    image: "",
  };

  vision: any = {
    libelle: "",
    content: "",
    image: "",
  };

  page: any;

  ngOnInit(): void {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.page = stateData;
  }
}
