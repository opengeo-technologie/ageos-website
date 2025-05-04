import { Component } from "@angular/core";

@Component({
  selector: "app-add-director",
  templateUrl: "./add.component.html",
  styleUrl: "./add.component.css",
})
export class AddDirectorComponent {
  director: any = {
    name: "",
    description: "",
    picture: null,
  };

  direction: any | undefined;

  ngOnInit(): void {
    // Get state data
    const direction = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.direction = direction;
    // console.log(direction);
  }
}
