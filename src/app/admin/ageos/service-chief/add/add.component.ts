import { Component } from "@angular/core";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrl: "./add.component.css",
})
export class AddChiefServiceComponent {
  chief: any = {
    name: "",
    description: "",
    picture: null,
  };

  service: any | undefined;

  ngOnInit(): void {
    // Get state data
    const service = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.service = service;
    // console.log(direction);
  }
}
