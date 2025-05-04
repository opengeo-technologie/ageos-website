import { Component } from "@angular/core";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrl: "./edit.component.css",
})
export class EditUserComponent {
  user: any | undefined;

  ngOnInit(): void {
    // Get state data
    const user = history.state.data; // OR: const stateData = this.router.getCurrentNavigation()?.extras.state?.data;
    this.user = user;
    // console.log(user);
  }
}
