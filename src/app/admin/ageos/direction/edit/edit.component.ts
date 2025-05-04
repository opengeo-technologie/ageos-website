import { Component } from "@angular/core";

@Component({
  selector: "app-edit-direction",
  templateUrl: "./edit.component.html",
  styleUrl: "./edit.component.css",
})
export class EditDirectionComponent {
  direction: any | undefined;

  ngOnInit(): void {
    // Get state data
    const direction = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.direction = direction;
    console.log(direction);
  }
}
