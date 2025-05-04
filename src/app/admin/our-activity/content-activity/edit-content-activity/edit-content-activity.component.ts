import { Component } from "@angular/core";

@Component({
  selector: "app-edit-content-activity",
  templateUrl: "./edit-content-activity.component.html",
  styleUrl: "./edit-content-activity.component.css",
})
export class EditContentActivityComponent {
  activity: any | undefined;

  ngOnInit(): void {
    // Get state data
    const stateData = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.activity = stateData;
    console.log(this.activity);
  }
}
