import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: ` <router-outlet></router-outlet> `,
  styles: [],
})
export class AppComponent {
  title = "AGEOS - Agence Gabonaise d'Etudes et d'Observations Spatiales";
  public isEnglish: boolean = false;
}
