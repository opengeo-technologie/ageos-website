import { Component } from "@angular/core";

@Component({
  selector: "app-edit-director",
  templateUrl: "./edit.component.html",
  styleUrl: "./edit.component.css",
})
export class EditDirectorComponent {
  director: any | undefined;

  direction: any | undefined;

  ngOnInit(): void {
    // Get state data
    const director = history.state.director; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.director = director;

    const direction = history.state.direction; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.direction = direction;
    console.log(director);
  }
}
